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