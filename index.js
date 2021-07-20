const express = require("express");
const mongoose = require("mongoose");
const app = express();
const chalk= require('chalk');
const boxen = require('boxen');


const start = () => {
    try {
        mongoose.connect('mongodb+srv://khamzat:12345@cluster0.aa1ma.mongodb.net/Blog?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log(boxen(chalk.bold.magentaBright("MongoDB подключен"), {borderColor: 'yellowBright', borderStyle: 'round'}));
    } catch (error) {
        console.log(error.message);
    }
};
start();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index"));

app.listen(3020, () => {
    console.log(boxen(chalk.bold.greenBright("Сервер подключен"), {borderColor: 'yellowBright', borderStyle: 'round'}));
});
