const http = require('http');
const app = require('./app');
const cors=require('cors');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;


app.use(cors({
    origin: ["http://localhost:5173", "https://uber-frontend-ejk3.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));
const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});