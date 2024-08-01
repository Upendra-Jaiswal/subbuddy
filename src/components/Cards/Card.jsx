import carddatafile from "./carddata.json";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="flex flex-row flex-wrap justify-content m-2 p-2 gap-4">
      {Object.entries(carddatafile).map(([key, carddata]) => (
        <div
          key={carddata.id}
          className="flex flex-col items-stretch bg-white border border-gray-200 rounded-lg shadow-md w-64 h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex-shrink-0">
            <img
              className="object-cover w-full h-48 rounded-t-lg"
              src={carddata.imageSrc || "default-image.jpg"} // Use a default image if none provided
              alt={carddata.name}
            />
          </div>
          <div className="flex flex-col flex-grow p-2 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {carddata.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {carddata.total_users_worldwide}
            </p>
            <p className="mb-3 text-xs text-gray-800 dark:text-gray-500">
              {carddata.users[0].name}
              <br />
              and {carddata.users.length - 1} others are sharing this
            </p>
          </div>
          <div className="flex-shrink-0 p-4">
            <button className="bg-blue-600 text-white rounded-md px-4 py-1 w-full">
              <Link to="/users" state={{ users: carddata.users }}>
                Subscribe
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
