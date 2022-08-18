import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/dummies/menu.json";
import {
  MdSpaceDashboard,
  MdAccountBalanceWallet,
  MdList,
  MdShoppingBag,
  MdLogout,
} from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";

const Sidebar = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div className="grid px-[69px] py-[45px] h-screen w-[208px] justify-center align-middle font-primary bg-secondary">
      <div className="text-primary text-3xl font-bold mb-16">
        <h1>SalesDash</h1>
      </div>
      <div className="h-fit border-b-2 border-b-secondary">
        {menu.main.map((m) => (
          <Link key={m.name} to={m.path}>
            <div
              className="flex"
              style={{ color: isActive === m.path ? "#545DFF" : "#7A7A7A" }}
            >
              <span className="text-[24px] mr-4">
                {m.name === "Dashboard" ? (
                  <MdSpaceDashboard />
                ) : m.name === "Balance" ? (
                  <MdAccountBalanceWallet />
                ) : m.name === "Transaction" ? (
                  <MdList />
                ) : m.name === "Product" ? (
                  <MdShoppingBag />
                ) : (
                  <RiOrganizationChart />
                )}
              </span>
              <p
                className="text-[18px] font-bold mb-[50px]"
                onClick={() => setIsActive(m.path)}
              >
                {m.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex text-secondary mt-[50px]">
        <span className="text-[24px] mr-4">
          <MdLogout />
        </span>
        <p className="text-[18px] font-bold mb-[50px] ">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
