import Link from "next/link";
import React from "react";
import { GiMeat } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="min-h-[100vh] clip  bg-blackFooter mt-[6rem] text-white px-[3rem] py-[3rem] sm:flex sm:flex-col gap-[4rem] sm:p-[3rem]  lg:p-[8rem] ">
      <div className="flex flex-col gap-14 sm:grid sm:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h1 className="flex text-[24px] font-[700]">
            PORKIFY <GiMeat color="tomato" />
          </h1>
          <div className="flex flex-col gap-5">
            <h3 className="font-[700] text-2xl">Let’s do it together</h3>
            <Link className="text-slate-300 text-sm" href="">
              Careers
            </Link>
            <Link className="text-slate-300 text-sm" href="">
              Porkify for Patners
            </Link>
            <Link className="text-slate-300 text-sm" href="">
              Caurier
            </Link>
            <Link className="text-slate-300 text-sm" href="">
              Porkify carrier
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-[800] text-[20px]">Links of interest</h3>
          <Link className="text-slate-300 text-sm" href="">
            About us
          </Link>
          <Link className="text-slate-300 text-sm" href="">
            FAQ
          </Link>
          <Link className="text-slate-300 text-sm" href="">
            Porkify Prime
          </Link>
          <Link className="text-slate-300 text-sm" href="">
            Blog
          </Link>
          <Link className="text-slate-300 text-sm" href="">
            Contact Us
          </Link>
          <Link className="text-slate-300 text-sm" href="">
            Sercurity
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-[800] text-[20px]">Follow Us</h3>
          <Link className="text-slate-300 text-sm" href="">
            Facebook
          </Link>
          <Link className="text-slate-300 text-sm" href="">
            Twitter
          </Link>
          <Link className="text-slate-300 text-sm" href="">
            Instragram
          </Link>
        </div>
        <div className="flex flex-col gap-4 mb-[5rem]">
          <img
            className="w-[60%] h-[60%] sm:h-[80%] sm:w-[80%]"
            src="/images/googleapple.png"
            alt=""
          />
          <p className="text-slate-300 text-sm">TERMS & CONDITIONS</p>
          <p className="text-slate-300 text-sm">PRIVACY POLICY</p>
          <p className="text-slate-300 text-sm">COOKIES PRIVACY</p>
          <p className="text-slate-300 text-sm">COMPLIANCE</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="font-[800] text-[20px]">Popular brands: Uganda</h3>
          <div className="flex flex-col gap-4">
            <p className="text-slate-300 text-sm">Kavuule</p>
            <p className="text-slate-300 text-sm">Kyadondo</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-[800] text-[20px]">Top categories: Uganda</h3>
          <div className="flex flex-col gap-4">
            <p className="text-slate-300 text-sm">Line meat</p>
            <p className="text-slate-300 text-sm">Ribbs</p>
            <p className="text-slate-300 text-sm">Normal pork</p>
            <p className="text-slate-300 text-sm">Roasted pork</p>
          </div>
        </div>
      </div>
    </div>
  );
}
