import "keen-slider/keen-slider.min.css";

import data from "../../../models/data.json";

export default function Testimonial() {
  return (
    <div className="bg-gray-dark3">
      <div className="w-full px-4">
        <div className="mx-auto text-primary-white mb-12 pt-12 lg:pt-20 max-w-[510px] text-center lg:mb-20">
          <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
            Our Testimonies
          </h2>
          <p className="text-body-color text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
      <div className="flex flex-col  justify-between px-[5%] lg:px-[10%] overflow-hidden gap-8 lg:gap-16 mx-auto  max-w-[1200px]">
        {data.testimonies.map((testimony, index) => (
          <>
            <section class="flex hover:shadow-2xl  p-4 bg-gray-dark3 text-primary-white my-8 rounded-lg  gap-x-8 jus">
              <div class="">
                <img
                  src={`/images/${testimony.image}`}
                  className="w-[500px] h-64 object-cover rounded-md shadow-lg"
                  alt="lineicon"
                />
              </div>
              <div class="">
                <p className="text-2xl font-semibold pt-8 border-b">
                  {testimony.title}
                </p>

                <div>
                  <div class="mb-7"></div>
                  <p class="w-full lg:w-96 text-body-color mb-11 text-base font-medium italic sm:text-lg">
                    {testimony.testimony}
                  </p>
                  <h4 class="text-dark text-xl font-semibold">
                    {testimony.donor}
                  </h4>
                </div>
              </div>
            </section>
          </>
        ))}
        <p className="text-body-color  text-center text-primary-white text-xl pb-16">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
    </div>
  );
}
