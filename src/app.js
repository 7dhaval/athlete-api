const express = require("express");
const app = express();
require("../src/db/conn")
const router = require("../src/route/route")
const AtheleteRanking = require("../src/models/athelete");
const port = process.env.PORT || 3000;

app.get("/" , async(req, res) => {
    res.send("Hello World");
});

app.use(express.json());

app.use(router);


app.listen(port, () => {
    console.log(`connection is on ${port}`);
});