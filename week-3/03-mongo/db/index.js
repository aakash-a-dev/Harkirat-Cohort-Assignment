const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
});

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const CourseSchema = new mongoose.Schema({
    course_title: String,
    coure_author: String,
    date: { type: Date, default: Date.now },
    course_category: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}