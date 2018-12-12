var express = require("express");
var session = require('express-session')
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");
var routes = require("./routes/index");
var books = require("./routes/books");
var authors = require("./routes/authors");
var categories = require("./routes/categories");
var app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);
app.use("/books", books);
app.use("/authors", authors);
app.use("/categories", categories);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}
// login system

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 10000 }
}));

app.use(function (req, res, next) {
  if (!req.session.myuser) {
    
    req.session.myuser={}
    req.session.myuser['userid']=0
  }
 
  
  next()
});
app.use(function (req, res, next) {
  if (!req.session.myuser) {
    
    req.session.myuser={}
    req.session.myuser['userid']=110
  }
 
  
  next()
});
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});
module.exports = app;
