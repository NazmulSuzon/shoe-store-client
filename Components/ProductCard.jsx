/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link href="/product/1"  className="overflow-hidden duration-200 transform bg-white cursor-pointer hover:scale-105">
      <img className="w-full" src="/product-1.webp" alt="Product Img" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$20.00</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="ml-auto text-base font-medium text-green-500">20% off</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
