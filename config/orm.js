var connection = require("../config/connection.js");
var orm = {
    selectAll: function (table, cb) {
        var queryString ="SELECT * FROM ??";
        connection.query( queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, colName, value, cb) {
        var queryString = "INSERT INTO ?? (??, devoured) VALUES (?, false)";
       
        connection.query(queryString, [table, colName, value], function (err, result) {
            if (err) {
                throw err;z
            }
            cb(result);
        });
    },

    updateOne : function (table, colName, value, id, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString,[table, colName, value, id],function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm ;