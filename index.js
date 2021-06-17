const express = require("express");
const mongoose = require("mongoose");
const mongoServer = require("./config");
const app = express();

const start = () => {
    try {
        mongoose.connect(mongoServer, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
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
