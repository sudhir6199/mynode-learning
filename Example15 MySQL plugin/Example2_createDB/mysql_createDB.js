// import module
var sql = require("mysql");

// Configure connection
var sql_con=sql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
    }
);

// Create Connection
sql_con.connect(function(err) {
           if (err) throw err;
           console.log("MySQL Connected");
           sql_con.query("CREATE DATABASE nodeDB", function(err, result) {
               if (err) throw err;
               console.log("Database Created..!");
           });
   }
);
