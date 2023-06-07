import "keen-slider/keen-slider.min.css";

import data from "../../../models/data.json";

export default function Testimonial() {
  return (
    <div className="">
      <div className="w-full px-4">
        <div className="mx-auto text-black mb-12 pt-12 lg:pt-20 max-w-[510px] text-center lg:mb-20">
          <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
            Our Testimonies
          </h2>
          <p className="text-body-color text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
      <div className="flex   justify-between px-[5%] lg:px-[10%] overflow-hidden gap-8 lg:gap-16 mx-auto  max-w-[1500px]">
        {data.testimonies.map((testimony, index) => (
          <>
            <section className="flex flex-col hover:shadow-2xl  p-4 bg-gray-dark3 text-primary-white my-8 rounded-lg  gap-x-8 ">
              <div className="">
                <img
                  src={`/images/${testimony.image}`}
                  className="w-full h-64 object-cover rounded-md shadow-lg"
                  alt="lineicon"
                />
              </div>
              <div className="">
                <p className="text-2xl font-semibold pt-8 border-b">
                  {testimony.title}
                </p>

                <div>
                  <div className="mb-7"></div>
                  <p className="w-full lg:w-[500px] text-body-color mb-11 text-base font-medium italic sm:text-lg">
                    {testimony.testimony}
                  </p>
                  <h4 className="text-dark text-xl font-semibold">
                    {testimony.donor}
                  </h4>
                </div>
              </div>
            </section>
          </>
        ))}
      </div>
    </div>
  );
}
