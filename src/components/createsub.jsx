import React from "react";
import { Link } from "react-router-dom";



const createsub = () => {
  return (
    <div>
      <form>
        Select your sub <input type="select" />
        Select your plan of selected sub <input type="select" />
        Start date <input type="date" />
        <input type="date" />
        End Date
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default createsub;
