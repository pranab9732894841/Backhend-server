const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const database = [
  { id: 1, productName: "paracitamal", price: 200, pcs: 10 , imgPath:"/static/image/demo.jpg"},
  { id: 2, productName: "acilock", price: 20, pcs: 20, imgPath:"/static/image/demo2.jpg" },
  { id: 3, productName: "saidon", price: 15, pcs: 10 , imgPath:"/static/image/demo.jpg"},
  { id: 4, productName: "abcd", price: 200, pcs: 1 , imgPath:"/static/image/demo2.jpg"},
  { id: 5, productName: "paracitamal", price: 20, pcs: 10 , imgPath:"/static/image/demo2.jpg"},
  { id: 6, productName: "acilock", price: 20, pcs: 20 , imgPath:"/static/image/demo.jpg"},
];

// app.use("/static", express.static(path.join(__dirname, "static")));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "/index.html"));
// });

app.get("/api/product", (req, res) => {
  res.send(database);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
