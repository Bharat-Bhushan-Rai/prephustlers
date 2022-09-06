require("dotenv").config({ path: "../.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
require('./config/passportJWT');
const Grid = require("gridfs-stream");
const { connection } = require("./config/db");
var indexrouter = require("./api/Routes/index");
const port = process.env.PORT || 5000;

const app = express();

// connections set up
connection();
const conn = mongoose.connection;

let gfs, gridfsBucket;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
// app.use(cookieParser());
app.use(function (req, res, next) {
  res.gfs = gfs;
  res.gridfsBucket = gridfsBucket;
  next();
});
app.use("/", indexrouter);

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
