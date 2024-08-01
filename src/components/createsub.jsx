import { useState } from "react";
import carddatafile from "./Cards/carddata.json";

const Createsub = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [plans, setPlans] = useState([]);

  // Create an array of options for the select input
  const options = Object.values(carddatafile).map((carddata) => (
    <option key={carddata.id} value={carddata.id}>
      {carddata.name}
    </option>
  ));

  // Handle subscription selection and update plans
  const handleSubscriptionChange = (e) => {
    const selectedId = e.target.value;
    setSelectedOption(selectedId);

    // Find the selected subscription and update plans
    const selectedSubscription = Object.values(carddatafile).find(
      (carddata) => carddata.id === parseInt(selectedId)
    );
    setPlans(selectedSubscription ? selectedSubscription.plans : []);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    // Update the minimum allowed date for the end date field
    if (endDate && e.target.value > endDate) {
      setEndDate(""); // Clear end date if it's less than the new start date
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Create Subscription
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="subscription"
              className="block text-gray-700 font-medium mb-1"
            >
              Select your subscription
            </label>
            <select
              id="subscription"
              className="w-full border border-gray-300 rounded-md p-2"
              value={selectedOption}
              onChange={handleSubscriptionChange}
            >
              <option value="">-- Select an option --</option>
              {options}
            </select>
          </div>

          <div>
            <label
              htmlFor="plan"
              className="block text-gray-700 font-medium mb-1"
            >
              Select your plan
            </label>
            <select
              id="plan"
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">-- Select a plan --</option>
              {plans.map((plan) => (
                <option key={plan.name} value={plan.name}>
                  {plan.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="start-date"
              className="block text-gray-700 font-medium mb-1"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={handleStartDateChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label
              htmlFor="end-date"
              className="block text-gray-700 font-medium mb-1"
            >
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={handleEndDateChange}
              min={startDate} // Set minimum allowed date based on start date
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createsub;
