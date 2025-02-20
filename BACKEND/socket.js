const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');
const cors = require("cors");
let io;

app.use(cors({ 
  origin: "https://uber-frontend-ge49.onrender.com", // Allow frontend
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));


function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {
        


        socket.on('join', async (data) => {
            const { userId, userType } = data;

            if (userType === 'user') {
                await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
            } else if (userType === 'captain') {
                await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
            }
        });


        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    ltd: location.ltd,
                    lng: location.lng
                }
            });
        });

        socket.on('disconnect', () => {
            
        });
    });
}

const sendMessageToSocketId = (socketId, messageObject) => {



    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };