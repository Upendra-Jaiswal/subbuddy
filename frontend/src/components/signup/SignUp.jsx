
import coverimage from "../../assets/subbuddylogo.jpg";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      password,
    };

    axios
      .post("http://localhost:3001/signup", data)
      .then(() => {
        alert("Data is submitted successfully");
        setName("");
        setPassword("");
        navigate("/login"); // Navigate to login page
      })
      .catch(() => {
        alert("Got error, data is not submitted");
      });
  };

  return (
    <div className="flex flex-col items-center h-80vh p-4">
      <h1 className="text-3xl font-bold mb-6">Signup</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={coverimage} // Replace with your image path
          alt="Signup"
          className="w-full h-64 object-cover" // Adjusted height
        />
        <form onSubmit={handleSubmit} className="p-6">
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
              className="bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition"
            >
              Signup
            </button>
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Go to login page
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
