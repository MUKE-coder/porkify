import Image from "next/image";
import React from "react";
import { BsPlus } from "react-icons/bs";

export default function DetailPage() {
  return (
    <div className="py-8 px-4 rounded-lg shadow-xl bg-gray-50">
      <div className="h-16 w-screen relative">
        <Image
          src="/products/ribs.jpg"
          fill
          className="absolute w-full h-full object-contain rounded-2xl "
        />
      </div>
      <div className="flex flex-col mb-2 ">
        <p className="bg-primary self-start px-2 py-1 rounded">2 in 1</p>
        <h2>Wanda Pork ribs</h2>
        <p className=" text-gray-500  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
          explicabo.
        </p>
      </div>
      {/* Heading */}
      <div className="">
        <h2 className="font-extrabold">Add toppings?</h2>
        <p className="text-gray-400 text-sm">Choose up to 4 Options</p>
      </div>
      <div className="">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-2">
            <h2>BBQ long stick</h2>
            <p>+ Ush.5000</p>
          </div>
          <button className="bg-green-100 p-1 self-start rounded-full">
            <BsPlus className="text-secondary w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-2">
            <h2>BBQ long stick</h2>
            <p>+ Ush.5000</p>
          </div>
          <button className="bg-green-100 p-1 self-start rounded-full">
            <BsPlus className="text-secondary w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Heading */}
      <div className="">
        <h2 className="font-extrabold">Add a Drink?</h2>
        <p className="text-gray-400 text-sm">Choose up to one Options</p>
      </div>
      <div className="">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-2">
            <h2>350ml Guiness</h2>
            <p>+ Ush.7000</p>
          </div>
          <button className="bg-green-100 p-1 self-start rounded-full">
            <BsPlus className="text-secondary w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-2">
            <h2>500ml Club Plisner</h2>
            <p>+ Ush.5000</p>
          </div>
          <button className="bg-green-100 p-1 self-start rounded-full">
            <BsPlus className="text-secondary w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
