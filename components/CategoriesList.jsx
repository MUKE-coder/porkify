import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cities from "../public/cities.svg";

export default function CategoriesList() {
  return (
    <div className='py-[5rem] flex flex-col items-center justify-center md:px-[5%] md:py-[5%] lg:px-[7.5%] lg:py-[7.5%] lg:box-border xl:max-w-full'>
      <div>
        <Image src={Cities} alt='Porkify Categories Listing' />
      </div>
      <h2 className='font-bold text-2xl lg:text-[36px] xl:text-[45px]'>
        Categories List
      </h2>
      <div className='flex flex-wrap gap-4 pt-[2rem] px-[2rem] justify-center items-center md:w-full md:gap-[12px] xl:text-[1rem] xl:gap-5'>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Fast Food
        </Link>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Chicken
        </Link>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Snacks
        </Link>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Pizza
        </Link>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Burgers
        </Link>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Local Food
        </Link>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Indian
        </Link>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Healthy
        </Link>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Grill
        </Link>
        <Link
          href='#'
          className='bg-[#fff3da] px-[1rem] py-[.5rem] rounded-full font-medium'
        >
          Sandwich
        </Link>
      </div>
    </div>
  );
}
