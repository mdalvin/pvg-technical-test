import React from "react";
import sales from "../assets/dummies/data.json";
import Card from "./Card";
import products from "../assets/dummies/products.json";
import ProductCard from "./ProductCard";
import agents from "../assets/dummies/agents.json";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="grid px-[32px] py-[32px] w-full h-fit justify-start font-primary">
      <div className="grid h-fit font-bold mb-10">
        <h1 className="text-[30px]">Dashboard</h1>
        <p className="text-[18px] text-secondary">
          Today’s date: Sun, 10 April 2022
        </p>
      </div>
      <div className="flex justify-between mb-10">
        {sales.data.map((s) => (
          <Card
            key={s.name}
            name={s.name}
            amount={s.amount}
            value={s.trendValue}
            trend={s.trend}
          />
        ))}
      </div>
      <div className="grid w-full h-fit mb-10 p-[16px] shadow-md rounded-md">
        <div className="h-fit mb-10">
          <p className="text-secondary text-lg font-bold">Sales Chart</p>
        </div>
        <Chart />
      </div>
      <div className="flex justify-between">
        <div className="grid w-full h-fit p-[16px] font-bold shadow-md rounded-md mr-8">
          <div className="h-fit mb-10">
            <p className="text-secondary text-lg">Top 5 Products</p>
          </div>
          <div className="grid grid-cols-2">
            {products.data.map((p) => (
              <ProductCard
                key={p.name}
                name={p.name}
                url={p.url}
                price={p.price}
                transactions={p.transactions}
              />
            ))}
          </div>
        </div>
        <div className="grid w-full h-fit p-[16px] font-bold shadow-md rounded-md">
          <div className="h-fit mb-10">
            <p className="text-secondary text-lg">Top 5 Agents</p>
          </div>
          <div className="grid h-fit">
            {agents.data.map((a) => (
              <div className="flex justify-left mb-4" key={a.company}>
                <div className="mr-[8px]">
                  <img
                    className="rounded-full border-2 border-primary w-20 h-auto"
                    src={a.url}
                    alt="Profile"
                  />
                </div>
                <div className="grid h-fit font-bold w-full">
                  <h2 className="text-[16px] text-primary">{a.company}</h2>
                  <div className="grid h-fit">
                    <div className="flex justify-between text-[14px]">
                      <p className="text-secondary">Profit</p>
                      <p>Rp {a.profit}</p>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <p className="text-secondary">Sales</p>
                      <p>Rp {a.sales}</p>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <p className="text-secondary">Transaction</p>
                      <p>{a.transaction} transactions</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
