import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/login.jsx";
import Mysub from "./components/mysub.jsx";
import Createsub from "./components/createsub";
import Users from "./components/Users/Users.jsx";
import Chat from "./components/Chat/Chat.jsx";

import Signup from "./components/signup.jsx";
import Subscribedsub from "./components/subscribedsub.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Signup />
      </div>
    ),
  },
  {
    path: "/mysub",
    element: (
      <div>
        <Mysub />
      </div>
    ),
  },
  {
    path: "/createsub",
    element: (
      <div>
        <Createsub />
      </div>
    ),
  },
  {
    path: "/subscribedsub",
    element: (
      <div>
        <Subscribedsub />
      </div>
    ),
  },
]);

const logged = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <NavBar />
  //   <RouterProvider router={router} />
  // </React.StrictMode>

  <Router>
    {logged ? (
      <>
        <NavBar />
        <div className="screens-container">
          <div className="screens-section-container">
            <Routes>
              {/* <RouterProvider router={router} /> */}

              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/mysub" element={<Mysub />} />
              <Route path="/createsub" element={<Createsub />} />
              <Route path="/subscribedsub" element={<Subscribedsub />} />
              <Route path="/users" element={<Users />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
      </>
    ) : (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    )}
  </Router>
);

// return (
//   <div className="App">
//     <BrowserRouter>
//     {logged ? (
//       <>
//       <Navbar />
//       <div className="screens-container">
//         <Sidebar />
//         <div className='screens-section-container'>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/customers' element={<Customers />} />
//             <Route path='/products' element={<Products/>}/>
//             <Route path='/transactions' element={<Transactions />} />
//             <Route path='/users' element={<Users />} />
//           </Routes>
//         </div>
//       </div>
//       </>
//     ): (
//       <Routes>
//         <Route path='/' element={<Login />} />
//       </Routes>
//     )}
//     </BrowserRouter>
//   </div>
// );
