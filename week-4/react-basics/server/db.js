const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://demoaakash9:soKlECxDeAJjCuEn@cluster0.qhnbu7d.mongodb.net/?retryWrites=true&w=majority")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}