const express = require("express");
const app = express();
require("../src/db/conn")
const port = process.env.PORT || 3000;

app.get("/" , async(req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`connection is on ${port}`);
});