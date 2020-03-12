// jshint esversion:6
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitdb", {useUnifiedTopology: true,useNewUrlParser: true});



const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please check your entry"]
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

const pineApple = new Fruit({
  name: "pineApple",
  rating: 8,
  review: "Pretty sweet"
});

//pineApple.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John deo",
  age: 19,
  favouriteFruit: pineApple
});

//person.save();



// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successful");
//   }
// });

// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     //console.log(fruits);
//     mongoose.connection.close();
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

// --------------> used to update a fruit
// Fruit.updateOne({_id: demoID}, {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });
// --------------> used to delete a fruit
// Fruit.deleteOne(//{_id: } or
//   {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });
// --------------> used to delete fruits
// Person.deleteMany({name : "John deo"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     console.log("Success");
//   }
// });
