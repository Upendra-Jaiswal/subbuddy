import React from 'react';
import { Link } from 'react-router-dom';

const MySub = () => {
  // Example data for demonstration purposes
  const subscriptions = [
    { id: 1, name: 'YouTube', description: 'Ad-supported access to most content.' },
    { id: 2, name: 'Netflix', description: 'High definition, 2 screens at a time.' },
    { id: 3, name: 'Prime Video', description: 'Includes Prime Video along with other Prime benefits.' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Subscription List</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {subscriptions.length > 0 ? (
          <ul className="space-y-4">
            {subscriptions.map((sub) => (
              <li key={sub.id} className="border-b border-gray-200 pb-2">
                <h2 className="text-xl font-semibold">{sub.name}</h2>
                <p className="text-gray-700">{sub.description}</p>
                <Link to={`/details/${sub.id}`} className="text-blue-600 hover:underline">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">You have no subscriptions yet.</p>
        )}
      </div>
    </div>
  );
};

export default MySub;
