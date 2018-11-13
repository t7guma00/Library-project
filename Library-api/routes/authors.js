var express = require("express");
var router = express.Router();
var authors = require("../models/authors");
router.get("/:ID?", function(req, res, next) {
  if (req.params.ID) {
    authors.getauthorByID(req.params.ID, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    authors.getAllauthors(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  authors.addauthor(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});
router.delete("/:ID", function(req, res, next) {
  authors.deleteauthor(req.params.ID, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put("/:ID", function(req, res, next) {
  authors.updateauthor(req.params.ID, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
