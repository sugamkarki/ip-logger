var express = require("express");
var router = express.Router();
const allIp = [];
/* GET home page. */
router.get("/", function (req, res, next) {
  //   console.log("dosososo");
  console.log("your ip is ", req.socket.localAddress);
  //   res.render("index", { title: "Johny" });
  res.json({
    ip: req.socket.localAddress,
  });
});

module.exports = router;
