import React from "react";
import { Link } from "react-router-dom";

const Myprofile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-64 bg-gray-800 text-white h-full z-50 shadow-lg">
      <button onClick={onClose} className="text-white p-4">
        Close
      </button>
      <ul>
        <li className="p-4 hover:bg-gray-700">
          <Link to="createsub">create my sub </Link>
        </li>

        <li className="p-4 hover:bg-gray-700">
          <Link to="/subscribedsub">see my subscribed sub</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/mysub">see my created sub </Link>
        </li>
        {/* Add more links or content here */}
      </ul>
    </div>
  );
};

export default Myprofile;
