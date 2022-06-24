require("dotenv").config();
const express = require('express');
const db = require("./db/conn.js");
const path = require('path');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.get('/', function (req, res) {
  res.sendFile(path.join("./my-app/public"));
});

app.get("/description", async(req, res) => {
  try {
  const data = await db.query('SELECT * FROM product_description',)
     if (data.rows.length === 0){
       res.send({ status: 404, message: "That product doesn't exist!" })
       } else {
         res.send(data.rows)
         console.log(data.rows)
       }
  } catch (err) {
  console.error(err.message)
  }

})

app.get("/features", async(req, res) => {
  try {
  const data = await db.query('SELECT * FROM product_features',)
     if (data.rows.length === 0){
       res.send({ status: 404, message: "That product doesn't exist!" })
       } else {
         res.send(data.rows)
         console.log(data.rows)
       }
  } catch (err) {
  console.error(err.message)
  }

})

app.listen(process.env.PORT,()=>{
  console.log(`Listening on PORT: ${3030}...`)
})