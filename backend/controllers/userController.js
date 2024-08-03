import user from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

const registerUser = async (req, res) => {
  res.send("register user");
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

const getUserProfile = async (req, res) => {
  res.send("get user profile ");
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {
  res.send(" update user details ");
};

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  res.send("  getusers");
};
// // @desc    Delete user
// // @route   DELETE /api/users/:id
// // @access  Private/Admin
const deleteUser = async (req, res) => {
  res.send("delete user  ");
};

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = async (req, res) => {
  res.send(" getuserbyid ");
};
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = async (req, res) => {
  res.send(" updateuser ");
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
