import { Link } from "react-router-dom";
import Card from "./Cards/Card";

const landingpage = () => {
  return (
    <div>
      <div className="all-cards-subs">
        <h1 className="p-3"> all subs of all users</h1>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default landingpage;
