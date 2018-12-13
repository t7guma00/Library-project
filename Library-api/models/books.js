var db = require("../database");
var books = {
  getAllbooks: function(callback) {
    return db.query("select * from books", callback);
  },
  getbookByID: function(ID, callback) {
    return db.query("select * from books where ID=?", [ID], callback);
  },
  addbook: function(books, callback) {
    return db.query(
      "insert into books values(?,?,?,?,?,?,?,?)",
      [
        books.ID,
        books.ISBN,
        books.title,
        books.year,
        books.description,
        books.author,
        books.image,
        books.rating
      ],
      callback
    );
  },
  deletebook: function(ID, callback) {
    return db.query("delete from books where ID=?", [ID], callback);
  },
  updatebook: function(ID, books, callback) {
    return db.query(
      "update books set ISBN=?,title=?, year=?, description=?, author=?, image=?, rating=? where ID=?",
      [
        books.ISBN,
        books.title,
        books.year,
        books.description,
        books.author,
        books.image,
        books.rating,
        ID
      ],
      callback
    );
  }
};
module.exports = books;
