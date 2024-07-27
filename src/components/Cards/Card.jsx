import React from "react";
import carddatafile from "./carddata.json";
import { Link } from "react-router-dom";
import Users from "../Users/Users";

const Card = () => {
  return (
    <div className="flex flex-row flex-wrap justify-content m-2 p-2 gap-4 ">
      {" "}
      {/* {carddatafile.map((carddata) => ( */}
      {Object.entries(carddatafile).map(([key, carddata]) => (
        <div
          key={carddata.id}
          className="flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {" "}
          <div>
            {" "}
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            />
          </div>
          <div>
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src=""
              alt="image"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {carddata.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {carddata.total_users_worldwide}
              </p>

              <p className="mb-3 text-xs text-gray-800 dark:text-gray-500">
                {carddata.users[0].name}
                <br />
                and {carddata.users.length-1} others are sharing this
              </p>
            </div>
          </div>
          <div>
            <button className="bg-blue-600 rounded-md p-1 m-4 ">
              <Link to="/users" state={{ users: carddata.users }}>
                Subscbibe
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
