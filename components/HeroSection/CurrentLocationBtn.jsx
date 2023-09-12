import React from "react";
import { FaLocationArrow } from "react-icons/fa";
export default function CurrentLocationBtn() {
  return (
    <button className="flex items-center gap-2">
      <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
        <FaLocationArrow className="w-4 h-4 text-secondary" />
      </div>
      <h2 className="text-secondary">Use current location</h2>
    </button>
  );
}
