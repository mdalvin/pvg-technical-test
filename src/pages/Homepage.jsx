import React from "react";
import { Dashboard, Profile, Sidebar } from "../components";

const Homepage = () => {
  return (
    <div className="flex m-0 p-0 h-[100vh] justify-between">
      <Sidebar />
      <Dashboard />
      <Profile />
    </div>
  );
};

export default Homepage;
