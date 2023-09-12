import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
export default function Product() {
  return (
    <Link
      href="/products/product-1"
      className="flex justify-between py-4 border-b gap-2"
    >
      <div className="flex gap-2 ">
        <div className="relative h-16 w-16 shrink-0">
          <Image
            src="/products/ribs.jpg"
            fill
            className="absolute rounded-2xl w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2>Wanda Pork ribs</h2>
          <p className="bg-primary self-start px-2 py-1 rounded">2 in 1</p>
          <p className="truncate-text text-gray-500  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
            explicabo.
          </p>
        </div>
      </div>
      <div className="flex flex-col shrink-0 justify-between">
        <h5>Ush. 39000</h5>
        <button className="bg-green-50 p-2 self-start rounded-full">
          <BsPlus className="text-secondary w-7 h-7" />
        </button>
      </div>
    </Link>
  );
}
