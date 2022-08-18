import React from "react";
import profile from "../assets/dummies/profile.json";

const Profile = () => {
  return (
    <div className="grid px-[32px] py-[45px] h-full w-[300px] justify-center align-middle font-primary bg-profile">
      <div className="grid h-fit">
        <div className="flex justify-center">
          <div>
            <img
              className="rounded-full mr-3 border-2 border-primary w-14 h-14"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="Profile"
            />
          </div>
          <div className="grid h-6 font-bold">
            <h2 className="text-[20px]">{profile.data.name}</h2>
            <p className="text-[16px] text-secondary">{profile.data.title}</p>
          </div>
        </div>
        <div className="grid rounded-md w-[250px] h-fit bg-tertiary my-10 p-5 align-middle justify-center text-center">
          <p className="font-bold text-secondary">Total Balance</p>
          <h1 className="font-bold text-[24px] py-3">Rp {profile.data.balance}</h1>
          <button className="w-auto bg-primary rounded-md p-1 justify-center text-center text-contrast hover:bg-secondary hover:text-primary ease-in-out duration-300 border-[1px] border-primary">
            Top Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
