import userCollection from "../models/authmodel.js";
import jwt from "jsonwebtoken";
import cors from "cors";
//import {hashPassword,comparePassword} from "../helpers/auth.cjs";
import bcrypt from "bcrypt";
//import { comparePassword } from "../helpers/auth.cjs";

const signup = async (req, res) => {
  const { name, password } = req.body;

  try {
    const exist = await userCollection.findOne({ name });
    if (exist) {
      return res.json({
        error: "Name already exist",
      });
    }
    // const hashPassword = (password) => {
    //   return new Promise((resolve, reject) => {
    //     bcrypt.genSalt(12, (err, salt) => {
    //       if (err) {
    //         reject(err);
    //       }
    //       bcrypt.hash(password, salt, (err, hash) => {
    //         if (err) {
    //           reject(err);
    //         }
    //         resolve(hash);
    //       });
    //     });
    //   });
    // };

    //const hashedPassword = await hashPassword(password);

    const hash_password = await bcrypt.hash(password, 10);

    const user = await userCollection.create({
      name,
      password: hash_password,
    });

    // const user = await userCollection.push({
    //   name,
    //   password,
    // });

    return res.json(user);
  } catch (e) {
    // try {
    //   const nameExists = await Collection.findOne({ name: req.body.name });
    //   if (nameExists) {
    //     res.send("user already exists");
    //   } else {
    //     const token = jwt.sign({ name: req.body.name }, "secretkeyy");
    //     const data = {
    //       name: req.body.name,
    //       password: req.body.password,

    //       token: token,
    //     };
    //     await Collection.insertMany([data]);
    //   }
    // }
    res.send(e);
  }
};

const login = async (req, res) => {
  try {
    const { name, password } = req.body;

    //check if user exists
    const user = await userCollection.findOne({ name });
    if (!user) {
      return res.json({ error: "no user found" });
    }

    const comparePassword = (arg1, arg2) => {
      return bcrypt.compare(arg2, arg1);
    };

    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { id: user._id, name: user.name, password: user.password },
        1234,
        {},
        (err, token) => {
          if (err) {
            console.log("jwt error");
          }

          res.cookie("token", token).json(user);
        }
      );

      res.json("password match");
    }
  } catch (e) {
    console.log(e);
  }
};


const logoutUser = async (req, res) => {
    // res.send("logout user");
    res.cookie("jwt", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 0, // Immediately expire the cookie
    });
  
    res.status(200).json({ message: "Successfully logged out" });
  };
  



// const getsignup = (req, res) => {
//   return res;
// };

export { signup, logoutUser, login };
