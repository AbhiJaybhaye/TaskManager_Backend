const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnection");
const { Routes } = require("./routes");

const server = express();
dotenv.config();

server.use(cors());
server.use(express.json());

server.use("/api/v1",Routes);

server.use("/", (req, res) => {
    res.send("<h1>Server Is Running</h1>");
});

connectDB();

server.listen(process.env.PORT || 9090, () => {
    console.log(`🌐 Server is running at http://localhost:${process.env.PORT} 🌐`);
}); 
