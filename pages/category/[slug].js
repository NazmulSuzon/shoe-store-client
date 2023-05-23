import React from "react";

import Wrapper from "@/Components/Wrapper";
import ProductCard from "@/Components/ProductCard";

const Category = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>

        {/* product grid start */}
        <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 my-14 md:px-0">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        {/* product grid end */}
      </Wrapper>
    </div>
  );
};

export default Category;

// {category?.data?.[0]?.attributes?.name}
