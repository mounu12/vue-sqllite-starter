var express = require('express');
var router = express();
const sqlite3 = require('sqlite3').verbose();

// open the database connection
let db = new sqlite3.Database('sample');
console.log("database is created");
db.serialize(function() {
    db.run('CREATE TABLE IF NOT EXISTS langs(name text,email text,company text,message text)');
});

router.post('/data', function(req, res){
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.company);
    console.log(req.body.message);
    db.run("INSERT INTO `langs`(`name`,`email`, `company`,'message') VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.company+"','"+req.body.message+"')", 
    function(err, row){
        if (err){
            // console.err(err);
            res.status(500);
        }
        else {
            res.status(202);
        }
        res.end();
    });
});


module.exports = router;