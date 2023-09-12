import React from "react";
import SearchBox from "./SearchBox";

export default function LocationBar() {
  return (
    <div className="py-8 ">
      <div className="container flex flex-col gap-4">
        <h2 className="text-slate-900 text-xl text-center font-extrabold">
          Explore delivery in Kampala
        </h2>
        <SearchBox/>
      </div>
    </div>
  );
}
