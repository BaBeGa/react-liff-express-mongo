var express = require("express");
var router = express.Router();
var User = require("./usermodel");

// GET all
router.get("/", (req, res) => {
  User.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});


// POST (create new user)
router.post("/", (req, res) => {
  var obj = new User(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("regist success");
  });
});

module.exports = router;