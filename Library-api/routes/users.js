var express = require('express');
var router = express.Router();

var connection = mysql.createConnection({
  host: 'localhost' ,
  user: 'root' ,
  password: 'root' ,
  database: 'user'
})

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send({message: 'Test'});
});

module.exports = router;
