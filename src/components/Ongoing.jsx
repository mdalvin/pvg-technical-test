import React from "react";

const Ongoing = ({ name }) => {
  return (
    <div className="grid px-[32px] pt-[20%] p w-full h-fit justify-center font-primary text-center">
      <h1 className="text-primary text-3xl mb-2">
        This {name} Page Is Under Development
      </h1>
      <p className="text-secondary text-xl">Please comeback later</p>
    </div>
  );
};

export default Ongoing;
