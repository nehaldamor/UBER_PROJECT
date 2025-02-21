const http = require('http');
const app = require('./app');
const cors=require('cors');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

app.use(cors({
    origin: ["http://localhost:5173", "https://uber-frontend-5x0l.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));


app.use(cors());
initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});