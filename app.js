// jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsdb", {  useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const insertDocuments = function(db, callback) {
  const collection = db.collection('fruits');

  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Great sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff!"
    }
], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};

const findDocuments = function(db, callback) {
  const collection = db.collection('fruits');
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
