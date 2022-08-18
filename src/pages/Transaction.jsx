import React from "react";
import { Ongoing, Profile, Sidebar } from "../components";

const Transaction = () => {
  return (
    <div className="flex m-0 p-0 h-[100vh] justify-between">
      <Sidebar />
      <Ongoing name="Transaction" />
      <Profile />
    </div>
  );
};

export default Transaction;
