import coverimage from "../../assets/subbuddylogo.jpg";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let TOKEN_KEY;

  const loginUser = (e) => {
    e.preventDefault();

    const data = {
      name,
      password,
    };

    axios
      .post("http://localhost:3001/login", data)
      .then(() => {
        alert("Login successful");
        setName("");
        setPassword("");

        navigate("/landing"); // Navigate to landing page after login
      })
      .catch(() => {
        alert("Error during login");
      });
  };

  return (
    <div className="flex flex-col items-center h-80vh p-4 ">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={coverimage} // Replace with your image path
          alt="Login"
          className="w-full h-64 object-cover" // Adjusted height
        />
        <form onSubmit={loginUser} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              required
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition"
            >
              Login
            </button>
            <p className="mt-4 text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Go to signup page
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
