import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AuthSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userCollection = mongoose.model("Collectiontwo", AuthSchema);

export default userCollection;
