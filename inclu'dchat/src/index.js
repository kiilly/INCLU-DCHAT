const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const fileUpload = require('express-fileupload');
app.use(cors());
const bodyParser = require('body-parser')

const server = http.createServer(app);
app.use(fileUpload());
app.use(bodyParser.json({extended : true}))
const urlencodedParser = bodyParser.urlencoded({extended: true})
app.post('/upload', urlencodedParser ,function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) { 
    return res.status(400)
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath =  'src/public/' + sampleFile.name;
 

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err) 
      return res.status(500).send(err);
      else
      res.status(200);
  });
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.belongs_to).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
const path = require('path')
app.use(express.static(path.join(__dirname, '/public')))
server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
