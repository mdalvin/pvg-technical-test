import React from "react";
import { Ongoing, Profile, Sidebar } from "../components";

const Channel = () => {
  return (
    <div className="flex m-0 p-0 h-[100vh] justify-between">
      <Sidebar />
      <Ongoing name="Channel" />
      <Profile />
    </div>
  );
};

export default Channel;
