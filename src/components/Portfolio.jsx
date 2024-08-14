import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    { id: 1, logo: mongoDB, name: "MongoDB" },
    { id: 2, logo: express, name: "Express" },
    { id: 3, logo: reactjs, name: "ReactJS" },
    { id: 4, logo: nodejs, name: "NodeJS" },
    { id: 5, logo: python, name: "Python" },
    { id: 6, logo: java, name: "Java" },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-6 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="w-full h-full border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 text-center">{name}</div>
                <p className="px-2 text-gray-700 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex justify-center px-6 py-4 space-x-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
