const express = require("express");

const app = express();



app.use("/hello", (req, res) => {
    res.send("Hello ! hello hello");
});

app.use("/test", (req, res) => {
    res.send("test test test");
});

app.use("/", (req, res) => {
    res.send("Namaste Karan");
});

app.listen(4000, () => {
    console.log("Server is successfully listening on port 4000...");
});