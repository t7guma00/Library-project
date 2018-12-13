var express = require("express");
var router = express.Router();
var user = require("../models/user");
router.get("/:ID?", function(req, res, next) {
  if (req.params.ID) {
    user.getuserByID(req.params.ID, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    user.getAllusers(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  user.adduser(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});
router.delete("/:ID", function(req, res, next) {
  user.deleteuser(req.params.ID, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put("/:ID", function(req, res, next) {
  user.updateuser(req.params.ID, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
