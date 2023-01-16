import React from "react";

interface LoadingType {
  numOfProducts: number;
}

const Loading = ({ numOfProducts }: LoadingType) => {
  const countCard = new Array(numOfProducts).fill("");

  return (
    <>
      {countCard.map((_, index) => {
        return (
          <div className="px-4 relative card group" key={index}>
            <div
              className="rounded-xl bg-gray-300 skeleton overflow-hidden card-shadow relative"
              style={{ width: 287, height: 386 }}
            ></div>
            <div className="w-24 h-3 bg-gray-300 skeleton mt-3 rounded-full"></div>
            <div className="w-36 h-3 bg-gray-300 skeleton mt-2 rounded-full"></div>
          </div>
        );
      })}
    </>
  );
};

export default Loading;
