import React from "react";
import Image from "next/image";
import porkRibs from "../public/Oven-Pork-Ribs.jpg";
import { BiSolidMinusCircle } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import categoryImg from "../public/category.svg";
import Link from "next/link";

export default function OrderList() {
  return (
    <div className='h-screen w-full px-[2rem] py-[2rem] flex flex-col justify-between md:items-center md:justify-around'>
      <div>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='font-bold text-2xl'>Your Order</h2>
            <span>2 product</span>
          </div>
          <Image src={categoryImg} alt='Porkify Category-SVG Order-Page' />
        </div>
        <div className='flex items-center justify-between flex-col gap-4 '>
          <>
            <div className='flex pt-[1.5rem] justify-between px-0 gap-[1.2rem] w-full'>
              <div className='flex gap-2 '>
                <span className='font-bold'>1x</span>
                <h3>Pork Launch Box</h3>
              </div>
              <h4 className=''>UGX22,500</h4>
            </div>
            <div className='flex items-center gap-4 w-full justify-between'>
              <div className='flex items-center gap-4'>
                <BiSolidMinusCircle
                  size={20}
                  className='h-6 w-6 text-secondary'
                />
                <p className='text-[1rem]'>
                  2 Piece original Recipe, 2 Ribs and Regular Chips
                </p>
              </div>
              <IoMdAddCircle size={20} className='h-6 w-6 text-secondary' />
            </div>
          </>
          <>
            <div className='flex pt-[1.5rem] justify-between px-0 gap-[1.2rem] w-full'>
              <div className='flex gap-2 '>
                <span className='font-bold'>2x</span>
                <h3>Pork Ribs Fried</h3>
              </div>
              <h4 className=''>UGX42,500</h4>
            </div>
            <div className='flex items-center gap-4 w-full justify-between'>
              <div className='flex items-center gap-4'>
                <BiSolidMinusCircle className='h-6 w-6 text-secondary' />
                <p className='text-[1rem]'>Bear, (Club Pilsner) 2Ltr</p>
              </div>
              <IoMdAddCircle className='h-6 w-6 text-secondary' />
            </div>
          </>
        </div>
      </div>
      <div>
        <Link href='#'>
          <button className='w-full py-[.8rem] px-[5rem] font-bold text-slate-50 bg-secondary rounded-full'>
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
