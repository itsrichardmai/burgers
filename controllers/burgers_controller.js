var express = require("express");
var burger = require("../models/burger");

module.exports = function (app) {

    app.get("/", function (req, res){
        burger.showAll(function (data){
            var burgerObj = {
                burgers: data
            }
            res.render("index", burgerObj);
        });
    })

    app.post("/api/burgers", function (req, res){
        console.log(req.body.bgName);
        burger.insert(req.body.bgName , function (data){
            console.log("This is create a burger");
            console.log(data);
            res.json(data)
        })
    });

    app.put("/api/burgers/:id", function (req,res){
        burger.update(req.body.devoured, req.params.id, function (data){
            res.json(data);
        })
    });  

}