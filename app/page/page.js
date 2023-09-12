import CategoryBanner from "@/components/CategoryBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import React from "react";

export default function page() {
  return (
    <>
      <CategoryBanner />
      <div className="bg-white min-h-screen max-w-full text-black lg:p-14 p-2">
        <FeaturedProducts />
      </div>
    </>
  );
}
