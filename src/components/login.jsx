import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div>
      <div>
        Email <input type="text" />
        Password <input type="text" />
        <button>
          <Link to="/">Login</Link>
          {/* going to landing page */}
        </button>
      </div>
      <div>
        {" "}
        <Link to="/signup"> go to signup</Link>
      </div>
    </div>
  );
};

export default login;
