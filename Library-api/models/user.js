var db = require("../database");
var user = {
  getAllusers: function(callback) {
    return db.query("select * from user", callback);
  },
  getuserByID: function(ID, callback) {
    return db.query("select * from user where ID=?", [ID], callback);
  },
  adduser: function(user, callback) {
    return db.query(
      "insert into user values(?,?,?)",
      [user.ID, user.username, user.password],
      callback
    );
  },
  deleteuser: function(ID, callback) {
    return db.query("delete from user where ID=?", [ID], callback);
  },
  updateuser: function(ID, user, callback) {
    return db.query(
      "update user set username=?, password=? where ID=?",
      [user.username, user.password, ID],
      callback
    );
  }
};
module.exports = user;
