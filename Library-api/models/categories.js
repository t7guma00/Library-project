var db = require("../database");
var categories = {
  getAllcategories: function(callback) {
    return db.query("select * from categories", callback);
  },
  getcategoryByID: function(ID, callback) {
    return db.query("select * from categories where ID=?", [ID], callback);
  },
  addcategory: function(categories, callback) {
    return db.query(
      "insert into categories values(?,?)",
      [categories.ID, categories.name],
      callback
    );
  },
  deletecategory: function(ID, callback) {
    return db.query("delete from categories where ID=?", [ID], callback);
  },
  updatecategory: function(ID, categories, callback) {
    return db.query(
      "update categories set name=? where ID=?",
      [categories.name, ID],
      callback
    );
  }
};
module.exports = categories;
