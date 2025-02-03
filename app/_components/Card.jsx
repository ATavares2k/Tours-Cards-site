"use client";

import { useState } from "react";

export default function Card({ nome, description, price, img }) {
  const [readMore, setReadMore] = useState(true);
  const [notInterested, setNotInterested] = useState(true);
  return (
    <>
      {notInterested && (
        <div className="bg-white rounded relative max-w-[25%] ml-2 flex flex-col overflow-hidden shadow-md">
          <div className="text-md font-thin  p-2 bg-[#294164] text-white absolute top-0 right-0 ">
            <span>${price}</span>
          </div>
          <div className="relative ">
            <img src={img} alt={nome} className="object-cover" />
          </div>
          <div className="p-4 flex flex-col ">
            <p className="font-bold text-2xl text-[#294164]">{nome}</p>
            <p className="font-thin line-clamp-[7] text-gray-600 mt-4">
              {description}
            </p>

            <button onClick={() => setReadMore((cur) => !cur)}>
              {readMore ? "Read More" : "Read less"}
            </button>
          </div>
          <div className="flex justify-center mb-3">
            <button
              href="#"
              className="border-2 py-1 px-14 text-[#294164] border-[#294164] hover:text-[white] hover:bg-[#294164] rounded-md"
              onClick={() => setNotInterested((cur) => !cur)}
            >
              Not Interested
            </button>
          </div>
        </div>
      )}
    </>
  );
}
