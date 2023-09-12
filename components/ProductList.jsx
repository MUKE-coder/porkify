import React from "react";
import Product from "./Product";

export default function ProductList() {
  return (
    <div className="bg-gray-100 mt-12 py-4 px-2 rounded-lg shadow-2xl">
      <h2 className="py-2  font-extrabold">Product List</h2>
      <div className="grid grid-cols-1">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
