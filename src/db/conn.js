const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/athelete", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then (() => {
    console.log("connection is successful with DB");
}).catch((err) => {
    console.log(("No Connection..."));
});
