import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import React from "react";

export default function CategoryBanner() {
  return (
    <div className="w-[100%] h-[35vh] bg-black mb-[6rem] lg:h-[50vh] relative  ">
      <Image
        className="object-cover "
        src="/images/burger and chips.jpg"
        alt=""
        fill
      />
      <div className="flex items-center flex-col  absolute w-[85%] h-[30vh] bg-gray-100 rounded-lg opacity-100 bottom-[-20%] left-[10%] shadow shadow-gray-500/40 py-6 gap-4 justify-center lg:w-[50%] lg:h-[40vh] lg:left-[25%] lg:bottom-[-30%] lg:shadow-lg">
        <h2 className="font-[700] text-[20px] lg:text-[30px]">The Food Hub</h2>
        <div className="flex gap-7">
          <div className="flex flex-col items-center gap-3">
            <img className="w-[30px] h-[30px] " src="/images/good.png" alt="" />
            <h3 className="font-[500] text-[15px] lg:text-[15px]">93%</h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <TbTruckDelivery className="lg:text-[40px]" size={27} />
            <h3 className="font-[500] text-[15px] lg:text-[15px]">USh.4900</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
