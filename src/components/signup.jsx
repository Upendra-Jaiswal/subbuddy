import React from "react";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div>
      <div>
        Email <input type="text" />
        Password <input type="text" />
        <button>Sign up</button>
      </div>
      <div>
        <Link to="/login" > go to login</Link>
      </div>
    </div>
  );
};

export default signup;
