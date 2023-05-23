import ProductDetailsCarousel from "@/Components/ProductDetailsCarousel";
import RelatedProducts from "@/Components/RelatedProducts";
import Wrapper from "@/Components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-2">
              jordan Retro 6 G
            </div>

            {/* product subtitle */}
            <div className="mb-5 text-lg font-semibold">
              Men&apos;s Golf Shoes
            </div>

            {/* product price */}
            <div className="text-lg font-semibold">USD : $220.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}

            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="font-semibold text-md">Select Size</div>
                <div className="text-md font-medium text-black/[0.5">
                  Select Guide
                </div>
              </div>
              {/* Heading End */}

              {/* SIZE START */}
              <div className="grid grid-cols-3 gap-2">
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 6
                </div>
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 6.5
                </div>
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 7
                </div>
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 7.5
                </div>
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 8
                </div>
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 8.5
                </div>
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 9
                </div>
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 9.5
                </div>
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 10
                </div>
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 10.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 11
                </div>
              </div>
              {/* SIZE END */}

              {/* SHOWS ERROR START */}
              <div className="mt-1 text-red-600">
                *Size selection is required
              </div>
              {/* SHOWS ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 mb-3 text-lg font-medium text-white transition-transform bg-black rounded-full active:scale-95 hover:opacity-75">
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISLIST BUTTON START */}
            <button className="flex items-center justify-center w-full gap-2 py-4 mb-10 text-lg font-medium transition-transform border border-black rounded-full active:scale-95 hover:opacity-75">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISLIST BUTTON END */}

            <div>
              <div className="mb-5 text-lg font-bold">Product Details</div>
              <div className="mb-5 text-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem autem ad, aut vero nulla hic porro tenetur, nam impedit assumenda quibusdam asperiores alias veniam illum placeat quia id quis fugiat ab magnam exercitationem. Cupiditate maiores accusantium cumque est distinctio dolorem, tenetur repellendus laborum eius in earum? Iure, sint ad! Placeat.
              </div>
              <div className="mb-5 text-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem autem ad, aut vero nulla hic porro tenetur, nam impedit assumenda quibusdam asperiores alias veniam illum placeat quia id quis fugiat ab magnam exercitationem. Cupiditate maiores accusantium cumque est distinctio dolorem, tenetur repellendus laborum eius in earum? Iure, sint ad! Placeat.
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>

        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
