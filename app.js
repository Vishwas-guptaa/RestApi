const express = require("express");
const db = require("./db/connectdb");
const app = express();
const mysql = require("mysql");
app.use(express.json());

//mysql database connection
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "invice",
});

//route for add customer

app.post("/addcustomer", (req, res) => {
  const { gst, partyname, phone, address } = req.body;

  //mysql connection
  mysqlConnection.query(
    "INSERT INTO customer (gst, partyname, phone,address) VALUES (?, ?, ?,?)",
    [gst, partyname, phone, address],
    (err, result) => {
      if (err) {
        console.error("Error registering customer: ", err);
        res
          .status(500)
          .json({ error: "An error occurred while registering customer" });
        return;
      }
    }
  );

  // User registration successful
  res.status(200).json({ message: "customer registered successfully" });
});

//route for add supplier

app.post("/addsupplier", (req, res) => {
  const { gst_in_no, partyname, phone, address } = req.body;

  //mysql connection
  mysqlConnection.query(
    "INSERT INTO supplier (gst_in_no, partyname, phone,address) VALUES (?, ?, ?,?)",
    [gst_in_no, partyname, phone, address],
    (err, result) => {
      if (err) {
        console.error("Error registering supplier: ", err);
        res
          .status(500)
          .json({ error: "An error occurred while registering supplier" });
        return;
      }
    }
  );

  // User registration successful
  res.status(200).json({ message: "supplier registered successfully" });
});

//server create
app.listen(7000, () => {
  console.log("local server start on port 7000");
});
