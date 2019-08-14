var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/add", function(req, res, next) {
  res.render("add", {});
});
router.post("/add", function(req, res, next) {
  var product_name = req.body.product_name;
  var product_price = req.body.product_price;
  var product_image = req.body.product_image;

  pool.query(
    "insert into product_info(product_name,product_price,image) values ($1,$2,$3)",
    [req.body.product_name, req.body.product_price, req.body.product_image],
    (err, responsive) => {
      if (err) {
        res.send("loi o day " + err);
      } else {
        res.send("da insert du lieu thanh cong");
      }
    }
  );
});
router.get("/", function(req, res, next) {
  // res.render("index", { title: "Express" });
  // pool.query("SELECT NOW()", (err, res) => {
  //   console.log(err, res);
  //   pool.end();
  // });
});

router.get("/getdata01", function(req, res, next) {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // // Request methods you wish to allow
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  // );

  // // Request headers you wish to allow
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "X-Requested-With,content-type"
  // );

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader("Access-Control-Allow-Credentials", true);
  // TIM HIEU VE PROXY

  // Pass to next layer of middleware

  // Pass to next layer of middleware

  pool.query("select * from product_info", (err, resi) => {
    if (err) {
      console.log("day la du  " + err);
    } else {
      res.send(resi.rows);
    }
  });

  // res.render("index", { title: "Express" });
});
// api get data from postgresql

module.exports = router;
const { Pool, Client } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sanpham",
  password: "tobao17",
  port: 5432
});
