export default function CompanyDetail() {
  return (
    <section className="bg-gray-dark3 text-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Our Passion
            </h3>
            <p className="text-gray-600 mb-8">
              We are passionate on our skin and haircare products whose
              ingredients such as: emulsifiers, preservatives, thickeners,
              moisturizers, colors and fragrances; are scientifically assessed
              and approved by our R&D with due care.
              <br />
              <br />
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src="/images/passion.png" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img src="/images/vision.png" alt="" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Mission
              </h3>
              <p className="text-gray-600 mb-8">
                To obtain the lions share and be a leader in cosmetics and
                plastic industry by providing the market with high quality
                products that keeps ultimate satisfactions of the consumer.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Vision
            </h3>
            <ul className="flex flex-col">
              <li>
                <p className="text-gray-600 mb-8">
                  ►Integrate technologically innovated machinen; with skilled
                  manpower and develop high grade quality product capable to
                  amplifiJ customer satisfaction and a proceed expected from the
                  sales.
                </p>
              </li>
              <li>
                <p className="text-gray-600 mb-8">
                  ►Make sure as company’s products are produced for the ultimate
                  satisfaction of our customers.
                </p>
              </li>
              <li>
                <p className="text-gray-600 mb-8">
                  ►Increase our level and standard of our products and to
                  increase our local as well as international market share.
                </p>
              </li>
              <li>
                <p className="text-gray-600 mb-8">
                  ►Approach scientifically with in-depth analysis to assess
                  unsatisfied needs of consumers to make crucial reforms and
                  improvements on the product that best suits to satisfy them.
                </p>
              </li>
            </ul>
            <br />
            <br />
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src="/images/goal.png" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img src="/images/env.png" alt="" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Environmental Impact
              </h3>
              <p className="text-gray-600 mb-8">
                Kromoto Manufacturing Plc respects international ethical
                standards set for safe environmental practices. Due to this, we
                were highly curious to engage on businesses no potential danger
                to the environment. We believed, this realihJ was the criteria
                initiated the community to acknowledge our project and handover
                to us their consent which we have submitted to the concerned
                organ to begin the investment. Fortunately, our both engagements
                are ecofriendly which cannot have potential impacts on soil,
                fauna or flora etc.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
