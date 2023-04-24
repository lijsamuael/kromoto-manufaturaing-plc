import data from "../../../models/data.json";

export default function ServiceHeader() {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] px-[5%]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Our Services
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-body-color text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {data.services.map((service, item) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-success-dark2 mx-auto mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl p-4">
                  <img src={`/icons/${service.image}`} alt="" />
                </div>
                <h4 className="text-dark text-center mb-3 text-xl font-semibold line-clamp-1">
                  {service.title}
                </h4>
                <p className="text-body-color text-center line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
