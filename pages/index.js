import HeroBanner from "@/Components/HeroBanner";
import ProductCard from "@/Components/ProductCard";
import Wrapper from "@/Components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>

        {/* Heading and Paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* Heading and Paragraph end */}

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
    </main>
  );
}
