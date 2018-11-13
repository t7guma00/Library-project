var db = require("../database");
var authors = {
  getAllauthors: function(callback) {
    return db.query("select * from authors", callback);
  },
  getauthorByID: function(ID, callback) {
    return db.query("select * from authors where ID=?", [ID], callback);
  },
  addauthor: function(authors, callback) {
    return db.query(
      "insert into authors values(?,?,?)",
      [authors.ID, authors.firstname, authors.lastname],
      callback
    );
  },
  deleteauthor: function(ID, callback) {
    return db.query("delete from authors where ID=?", [ID], callback);
  },
  updateauthor: function(ID, authors, callback) {
    return db.query(
      "update authors set firstname=?,lastname=? where ID=?",
      [authors.firstname, authors.lastname, ID],
      callback
    );
  }
};
module.exports = authors;
