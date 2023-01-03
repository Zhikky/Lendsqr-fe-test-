import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/dashboard";
import UserPage from "./Components/User/userPage";
import UserGeneralDetails from "./Components/User general details/user";
import PageNotFound from "./Components/404 page/404";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="userpage" element={<UserPage />} />
      <Route path="userdetails" element={<UserGeneralDetails />} />
      <Route path="*" element={< PageNotFound/>}/>
    </Routes>
  );
}

export default App;
