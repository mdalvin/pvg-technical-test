import React from "react";
import maxim from "../assets/logo/maxim.png";
import telkomsel from "../assets/logo/telkomsel.png";
import three from "../assets/logo/three.png";
import ovo from "../assets/logo/ovo.png";
import pln from "../assets/logo/pln.png";

const ProductCard = ({ name, price, transactions }) => {
  return (
    <div className="grid min-w-[100px] h-fit p-[16px] font-bold rounded-md mx-1 justify-center items-center align-middle text-center font-primary border-[1px] border-primary m-1">
      <div className="flex self-center w-auto justify-center">
        <img
          className="w-[40px] h-[40px]"
          src={
            name === "Maxim"
              ? maxim
              : name === "Telkomsel"
              ? telkomsel
              : name === "Three"
              ? three
              : name === "OVO"
              ? ovo
              : pln
          }
          alt="Product"
        />
      </div>
      <p className="text-[16px] text-primary py-2">{name}</p>
      <h1 className="text-[14px] text-secondary">{price}</h1>
      <p className="text-[16px] text-[#000]">{transactions} transactions</p>
    </div>
  );
};

export default ProductCard;
