// import module
var sql = require("mysql");

// Configure connection
var sql_con=sql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: "nodeDB"
    }
);

// Create Connection
sql_con.connect(function(err) {
           if (err) throw err;
           console.log("MySQL DB Connected");

           //Create Table
           var table_def = "CREATE TABLE demo_table (name VARCHAR(255), email VARCHAR(255))";
           sql_con.query(table_def, function(err, result){
            if (err) throw err;
            console.log("Table created:" + result);
           });
   }
);
