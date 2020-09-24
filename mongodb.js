

var Mongodb = require('mongodb');
var url ="mongodb://localhost:27017";

 Mongodb.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, db){
        if(err) throw err;
        console.log("thanh cong roi nha!");
        db.close();
    });
 });


 console.log("dhfdufhduf");