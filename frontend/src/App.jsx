import { useState } from "react";
import LandingPage from "./components/landingpage";
import Signup from "./components/signup/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <span className="text-xs">
            <strong className="font-bold">Notice:</strong> This project is
            currently under development. Please be aware that some features may
            not be fully functional or may not yet be implemented.
          </span>
        </div>
        <Signup />
        {/* <LandingPage /> */}
      </div>
    </>
  );
}

export default App;
