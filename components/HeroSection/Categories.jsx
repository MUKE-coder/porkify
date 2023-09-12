import React from "react";
import CategoryItem from "./CategoryItem";
export default function Categories() {
  return (
    <div class="flex justify-center items-center">
      <div class="flex mt-4 py-8  w-[300px] h-[300px] justify-center items-center relative">
        <CategoryItem classNames="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <CategoryItem classNames="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <CategoryItem classNames="absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2" />
        <CategoryItem classNames="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-1/2" />
        <CategoryItem classNames="absolute top-1/2 right-8 transform translate-x-1/2 -translate-y-1/2" />
        {/* <CategoryItem />
        
        
        <CategoryItem />
        <CategoryItem />
        <CategoryItem /> */}
      </div>
    </div>
  );
}
