import React from "react";
import LocationBar from "./LocationBar";
import Categories from "./Categories";
export default function HeroSection() {
  return (
    <div className=" bg-primary ">
      <LocationBar />
      <Categories />
    </div>
  );
}
