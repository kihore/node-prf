const express = require("express");
// const { sequelize } = require('../models')
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7050;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var whitelist = ['http://localhost:3000']
var corsOptions= {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//setting view engine and cors policy to express instance
app.use(cors())

app.use("/api/addproducts", require('./routes/productRouter') )


app.listen(port, ()=>{
    console.log("node started")
})