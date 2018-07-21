 
const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;
 
var url = "mongodb://localhost:27017/";

app.get('/', (request, response) => response.send('Hello World'));

app.get('/listUsers', function (req, res) {
	
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Cricket");
  var data=dbo.collection("cricket").find({}).toArray(function(err, result) {
    if (err) throw err;
	console.log(result);
	res.json(result);
	
db.close();
});
});
})


app.listen(3000, () => console.log('Listening on port 3000'));