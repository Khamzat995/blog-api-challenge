const express = require("express");
const mongoose = require("mongoose");
const app = express();

const start = () => {
    try {
        mongoose.connect('mongodb+srv://jambo:jambo095@cluster0.6qawl.mongodb.net/blog-api-challenge?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log('Success connect mongo');
    } catch (error) {
        console.log(error.message);
    }
};
start();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index"));

app.listen(3000, () => {
    console.log("Success connect server");
});
