// const express = require("express");
// const app = express();

// const cors = require("cors");

// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const bookRoutes = require("./routes/addBookRoute");
// const userRoutes = require("./Routes/userRoutes");

// const bookRouter = require("./Routes/bookRoute");
// const buyListRouter = require("./Routes/buyListRoute");

// const passport = require("passport");
// const passportJWT = require("passport-jwt");
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import passportJWT from "passport-jwt";
import dotenv from "dotenv";

const app = express();

//import bookRoutes from "./routes/addBookRoute.js";
import userRoutes from "./Routes/userRoutes.js";

import authRoutes from "./Routes/authRoutes.js";
//import buyListRouter from "./Routes/buyListRoute.js";

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const PORT = 3001;

const MONGODB_URI = "mongodb://localhost:27017/subsharemern";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secretkeyy", // Replace with a secret key
};

app.use(bodyParser.json());

app.use(cors());

// Routes

app.use("/api/users", userRoutes);

app.use("/", authRoutes);

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// app.use("")

//app.use(cors({ credentials: true, origin: "*" }));

//app.use("/",authRoutes)

passport.use(
  new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    User.findById(jwtPayload.id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

app.use(express.json());

//app.use("/", bookRouter);
//app.use("/buyList", buyListRouter);

app.listen(PORT, () => {
  console.log(`server is running at  ${PORT} `);
});

// app.get("/hello", function hello(req, res) {
//   res.json("helloji");
// });
