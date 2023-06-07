import data from "../../../models/data.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function ProductList() {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(max-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 700px)": {
        slides: { perView: 3, spacing: 5 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 5, spacing: 20 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <>
      <div className="flex justify-between mx-auto px-4 py-16 max-w-[1200px]">
        <div className="gap-2 bg-warning-light4 text-center rounded-full h-40 w-40 whitespace-nowrap flex flex-col justify-center p-4">
          <div className="text-4xl font-extrabold"> 2021</div>
          <span>Starting Year</span>
        </div>
        <div className="gap-2 bg-warning-light4 text-center rounded-full h-40 w-40 whitespace-nowrap flex flex-col justify-center p-4">
          <div className="text-4xl font-extrabold">1050</div>
          <span>visitor Count</span>
        </div>
        <div className="gap-2 bg-warning-light4 text-center rounded-full h-40 w-40 whitespace-nowrap flex flex-col justify-center p-4">
          <div className="text-4xl font-extrabold">42</div>
          <span>Product Counts</span>
        </div>
      </div>
      <div className="mx-auto text-black mb-12 pt-12 lg:pt-20 max-w-[510px] text-center lg:mb-20">
        <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
          A variety of products
        </h2>
        <p className="text-body-color text-base">
          We have been producing different types of products with in so many
          catagories since the intiattion of the company.
        </p>
      </div>
      <div ref={sliderRef} className="keen-slider pb-16">
        {data.products.map((item, index) => (
          <div
            className="keen-slider__slide p-4 bg-secondary-light2 rounded-xl"
            key={index}
          >
            <img className="w-72 h-72" src={`/images/${item.image}`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
