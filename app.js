// jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitdb", {useUnifiedTopology: true,useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit"
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John deo",
  age: 19
});

person.save();



// const insertDocuments = function(db, callback) {
//   const collection = db.collection('fruits');
//
//   collection.insertMany([
//     {
//       name: "Apple",
//       score: 8,
//       review: "Great fruit"
//     },
//     {
//       name: "Orange",
//       score: 6,
//       review: "Great sour"
//     },
//     {
//       name: "Banana",
//       score: 9,
//       review: "Great stuff!"
//     }
// ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };
//
// const findDocuments = function(db, callback) {
//   const collection = db.collection('fruits');
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
