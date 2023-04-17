const mongoose = require('mongoose');


//mongoose fruit schema (blueprint)
const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

//mongoose model
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;