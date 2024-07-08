/* eslint-disable @next/next/no-img-element */
import React from "react";

const images = [
  {
    id: 1,

    imageUrl: "/poster1.png",
  },
  {
    id: 2,

    imageUrl: "/poster2.jpeg",
  },
  {
    id: 3,

    imageUrl: "/poster3.jpeg",
  },
  {
    id: 4,

    imageUrl: "/poster4.jpeg",
  },
];

const CryptoDictionary = () => {
  return (
    <>
      <div className="w-full py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:mx-0">
            <h1 className="flex justify-center">Crypto Dictionary</h1>
            <p className="flex justify-center text-[#717171]">
              Your one-stop to catch up on all crypto terms
            </p>
          </div>
         
            <img className="rounded-2xl w-full mt-6" alt="logo" src={"/robo.jpeg"} />
        
        </div>
      </div>
    </>
  );
};

export default CryptoDictionary;
