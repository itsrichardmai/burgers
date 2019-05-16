var orm = require("../config/orm");

var burger = {
    showAll: function (cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: function(burgerName, cb){
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        });
    },
    update: function(devoured, userID, cb){
        orm.updateOne("burgers","devoured", devoured, userID,function(res){
            cb(res);
        });
    }
}
module.exports = burger;