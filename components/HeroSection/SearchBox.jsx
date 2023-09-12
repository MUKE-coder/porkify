import React from "react";
import { BsFlag } from "react-icons/bs";
import CurrentLocationBtn from "./CurrentLocationBtn";
export default function SearchBox() {
  return (
    <div className="flex rounded-full px-4 py-2 items-center overflow-hidden cursor-pointer flex-wrap gap-2">
      <div className="flex items-center">
        <div className="bg-secondary px-4 py-2 rounded-l-lg">
          <BsFlag className="h-6 w-6 text-gray-100" />
        </div>
        <div className="flex-1 bg-gray-100 cursor-pointer rounded-r-lg w-full">
          <div className="flex items-center py-2 px-2 gap-2 ">
            <div className="blinking-cursor"></div>
            <p className="text-gray-400">What is your address?</p>
          </div>
        </div>
      </div>
      <CurrentLocationBtn />
    </div>
  );
}
