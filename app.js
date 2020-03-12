// jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitdb", {useUnifiedTopology: true,useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: Number,
    required: [true, "please check you entry"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 5,
  review: "Pretty solid as a fruit"
});

fruit.save();

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

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 6,
  review: "Good taste"
});

const orange = new Fruit({
  name: "Orange",
  rating: 5,
  review: "tasty"
});

const banana = new Fruit({
  name: "banana",
  rating: 3,
  review: "Pretty sweet"
});

Fruit.insertMany([kiwi, orange, banana], function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    //console.log(fruits);
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

// --------------> used to update a fruit
Fruit.updateOne({_id: demoID}, {name: "Peach"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});
// --------------> used to delete a fruit
Fruit.deleteOne(//{_id: } or
  {name: "Peach"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});
// --------------> used to delete fruits
Person.deleteMany({name : "John deo"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log("Success");
  }
});

//
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
