import Link from "next/link";
import React from "react";
import { GiKitchenScale } from "react-icons/gi";
export default function Navbar() {
  return (
    <div className="  bg-primary h-[60px] fixed top-0 w-full flex items-center justify-between">
      <div className="container px-8 flex items-center justify-between">
        <Link href="/">
          <GiKitchenScale className="h-8 w-8 text-secondary" />
          <span className="hidden text-5xl">Porkify</span>
        </Link>
        <button className="py-2 px-6 rounded-full shadow-3xl bg-secondary text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
