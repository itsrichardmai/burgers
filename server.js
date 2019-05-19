var express = require("express");
var PORT = process.env.PORT || 3000;
var app  = express();
var path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller")(app);

app.listen(PORT, function(){
    console.log("App listenting on  http://localhost:" + PORT);
})

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://user:password1@ds143326.mlab.com:43326/heroku_svnrzrr8",
    {
        useMongoClient: true
    }
);