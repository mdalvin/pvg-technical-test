import React from "react";
import { MdSouthEast, MdNorthEast, MdEast } from "react-icons/md";

const Card = ({ name, amount, value, trend }) => {
  return (
    <div className="grid max-w-[400px] h-fit p-[16px] font-bold box shadow-md rounded-md mr-2">
      <p className="text-[16px] text-secondary">{name}</p>
      <h1 className="text-[30px]">{amount}</h1>
      <div
        className="flex text-right"
        style={{
          color:
            trend === "fall"
              ? "#E94948"
              : trend === "rise"
              ? "#36D189"
              : "#FFDC7D",
        }}
      >
        <span className="text-lg">
          {trend === "fall" ? (
            <MdSouthEast />
          ) : trend === "rise" ? (
            <MdNorthEast />
          ) : (
            <MdEast />
          )}
        </span>
        <p className="text-[14px]">{value} compared to 7 days ago</p>
      </div>
    </div>
  );
};

export default Card;
