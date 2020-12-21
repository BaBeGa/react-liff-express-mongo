const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
// var corsOptions = {
//   origin: "http://localhost:5000"
// };
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200 
};


var mongo_uri = "mongodb+srv://merp:p@ssw0rd2020@cluster0.j813g.mongodb.net/MINI_REACT_LIFF?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("success : connected to the database ");
  },
  error => {
    console.log("failed to connect database" + error);
    process.exit();
  }
);

var app = express();
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'react-liff/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on port " + port);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/react-liff/build/index.html'));
});

app.get("/ping", (req, res) => {
  res.status(200).send("ping : hello express");
});

var User = require("./userrouter");
app.use("/api/user", User);

app.use((req, res, next) => {
  var err = new Error("not found");
  err.status = 404;
  next(err);
});
