const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { mongoose } = require("./db");
const bodyParser = require("body-parser");
const {Product} = require('./product')
app.use(cors());



app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/api/product", (req, res) => {
  console.log(Product)
  res.send(JSON.stringify(Product)  );
});

app.post("/api/product", (req, res) => {
  let prod = new Product({
    productName: req.body.productName,
    price: req.body.price,
    pcs: req.body.pcs,
    age: req.body.age,
    imgPath: req.body.imgPath
  });
  prod.save((err, doc) => {
    if (err)
      console.log(
        "error in saving customers..." + JSON
         .stringify(err, undefined, 2)
      );
    else resp.send(doc);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
