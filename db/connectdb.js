const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "invice",
});

mysqlConnection.connect((err) => {
  if (!err) console.log("db connection successful establish");
  else
    console.log(
      "Db connection failed\n Error :" + JSON.stringify(err, undefined, 2)
    );
});
