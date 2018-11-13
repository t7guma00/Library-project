var express = require("express");
var router = express.Router();
var categories = require("../models/categories");
router.get("/:ID?", function(req, res, next) {
  if (req.params.ID) {
    categories.getcategoryByID(req.params.ID, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    categories.getAllcategories(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  categories.addcategory(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});
router.delete("/:ID", function(req, res, next) {
  categories.deletecategory(req.params.ID, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put("/:ID", function(req, res, next) {
  categories.updatecategory(req.params.ID, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
