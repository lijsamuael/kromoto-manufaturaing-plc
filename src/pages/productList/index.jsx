import data from "../../models/data.json";

export default function ProductPage() {
  return (
    <div className="bg-white max-w-[1500px] mx-auto">
      <div className="mx-auto  px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
        <h2 className="text-4xl sm:text-center font-bold tracking-tight text-gray-900">
          Our Products
        </h2>
        <h3 className="pt-16 text-3xl font-semibold pb-8">Creams</h3>
        <p classNameName="text-xl text-center py-4">
          Our hair and body creams, which are natures based, gently refreshes
          sensitive skin, promoting comfort and softness. we offers, best creams
          for additional smooth, gloving and younger looking skin. we utilize
          natural ingredients in our products to create skin and hair care
          products that not only beautify but also nourish the skin and hair
          using creative blend of nature’s rich resources. <br />
          <br /> The creams refresh your skin and hair and transforms them by
          restoring its moisture balance. The creams are capable to be absorbed
          immediately, makes body and hair to feel silky smooth, gently
          exfoliate and perfectly improve skin clarity. It gently refreshes
          sensitive skin, promoting comfort and softness. We do have three types
          of cream products supplied to the market with various sizes. <br />
          <br /> These products are <b>Hair Food,</b> <b>coconut,</b>{" "}
          <b>Advocates</b>. we are proud to introduces our creams which are
          widely distributed in the local market.
        </p>
        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.products.map(
            (item, index) =>
              item.category === "Cream" && (
                <div key={index} className="keen-slider__slide ">
                  <div className="w-full h-64  bg-gray-light3 p-4 rounded-lg">
                    <img
                      src={`/images/${item.image}`}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="h-full w-full object-cover object-center "
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-sm text-gray-700">{item.name}</h3>
                  </div>
                </div>
              )
          )}
        </div>
        <h3 className="pt-16 text-3xl font-semibold pb-8">Oils</h3>

        <div className="grid grid-cols-1 items-center mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <p className="text-xl  py-4 sm:col-span-2">
            We produce three types of hair and body oil. these well-known
            products are OLIVA TONIC and PARAFFIN OIL. The products, squished
            from various plants such as herbals and riched by helpful
            ingridients are widely accepted by the end-users.
            <br />
            <br /> The products are further described as follows:
            <br />
            <br /> Oliva: – Golden hair oil squeezed from olive produces and
            makes hair more attractive than ever.
            <br />
            <br /> TONIC: – Splendid oil originated from various herbals and
            dependable to make hair smooth, moisturize and healthy.
            <br />
            <br />
            PARAFFIN:- Sesetional oil which prevents hair from nalled up and
            adores hair with attractive reflection.
          </p>
          {data.products.map(
            (item, index) =>
              item.category === "Oil" && (
                <div key={index} className="keen-slider__slide ">
                  <div className="w-full h-64  bg-gray-light3 p-4 rounded-lg">
                    <img
                      src={`/images/${item.image}`}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="h-full w-full object-cover object-center "
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-sm text-gray-700">{item.name}</h3>
                  </div>
                </div>
              )
          )}
        </div>
        <h3 className="pt-16 text-3xl font-semibold pb-8">Sachets</h3>

        <div className="grid grid-cols-1 items-center mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <p className=" text-xl py-4 sm:col-span-2 ">
            Kromoto Manufacturing Company produces two types of sachet products.
            Lina Vaseline and Lina Sachet. As we always did; we designed,
            manufactured, packed and delivered these pretty and highly
            tandardized quality products to the market for ultimate satisfaction
            of our client.
            <br />
            <br /> They do have an adorable design and delivered to end users
            with attractive packaging. These products are offered with an
            affordable price just to address all customers and acquaint its
            brand LINA.
            <br />
            <br /> LINA SACKET:- is the golden cream made up of various herbals
            having splendid odor. The objective of manufacturing of these highy
            quality cream product is to alleviate their availablity and address
            each and every one of the communities with reasonable price. <br />
            <br />
            VASELINE SACKET: – this product is originated from virgin and pure
            Vaseline cream which keeps the smoothest of our skin and its holes
            for best ventilation and refreshment.
          </p>
          {data.products.map(
            (item, index) =>
              item.category === "Sachet" && (
                <div key={index} className="keen-slider__slide ">
                  <div className="w-full h-64  bg-gray-light3 p-4 rounded-lg">
                    <img
                      src={`/images/${item.image}`}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="h-full w-full object-cover object-center "
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-sm text-gray-700">{item.name}</h3>
                  </div>
                </div>
              )
          )}
        </div>

        <h3 className="pt-16 text-3xl font-semibold pb-8">Preform</h3>
        <p classNameName="text-xl text-center py-4">
          A PET preform is an intermediate product that is subsequently blown
          into a polyethylene terephthalate (PET) container.
          <br />
          <br /> Preforms vary in neck finish, weight, colour and shape, and are
          specifically designed to meet the needs of customers in different
          market segments. Preforms can be single-layer or multilayer.
        </p>
        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="keen-slider__slide ">
            <div className="w-full h-64  bg-gray-light3 rounded-lg">
              <img
                src="/images/pr1.jpeg"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center "
              />
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm text-gray-700"></h3>
            </div>
          </div>
          <div className="keen-slider__slide ">
            <div className="w-full h-64  bg-gray-light3 rounded-lg">
              <img
                src="/images/pr2.jpeg"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center "
              />
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm text-gray-700"></h3>
            </div>
          </div>
          <div className="keen-slider__slide ">
            <div className="w-full h-64  bg-gray-light3 rounded-lg">
              <img
                src="/images/pr3.jpeg"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center "
              />
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm text-gray-700"></h3>
            </div>
          </div>
          <div className="keen-slider__slide ">
            <div className="w-full h-64  bg-gray-light3 rounded-lg">
              <img
                src="/images/pr4.jpg"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center "
              />
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm text-gray-700"></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
