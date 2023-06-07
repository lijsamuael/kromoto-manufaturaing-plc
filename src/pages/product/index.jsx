import { Link } from "react-router-dom";
export default function ProductPage() {
  return (
    <section className="container px-6 py-8 mx-auto lg:py-16">
      <h3 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl ">
        Our Product Categories
      </h3>

      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="relative">
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="/images/cream.jpeg"
              alt=""
            />

            <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-2xl">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="/images/cream.jpeg"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700">Hair Food</h1>
                <p className="text-sm text-gray-500">Coconut </p>
                <p className="text-sm text-gray-500">Advocates</p>
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-xl font-semibold text-gray-800">CREAMS</h1>

          <hr className="w-32 my-6 text-indigo-500" />

          <p className="text-sm text-gray-500">
            The creams are capable to be absorbed immediately, makes body and
            hair to feel silky smooth, gently exfoliate and perfectly improve
            skin clarity. It gently refreshes sensitive skin, promoting comfort
            and softness.
          </p>

          <Link
            to="/productList"
            className="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400"
          >
            Read more
          </Link>
        </div>

        <div>
          <div className="relative">
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="/images/oil.jpeg"
              alt=""
            />

            <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-2xl">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="/images/oil.jpeg"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700">Oliva</h1>
                <p className="text-sm text-gray-500">Tonic</p>
                <p className="text-sm text-gray-500">Parafin</p>
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-xl font-semibold text-gray-800">OILS</h1>

          <hr className="w-32 my-6 text-indigo-500" />

          <p className="text-sm text-gray-500">
            we produce three types of hair and body oil. these well-known
            products are OLIVA TONIC and PARAFFIN OIL. The products, squished
            from various plants such as herbals and riched by helpful
            ingridients are widely accepted by the end-users.
          </p>

          <Link
            to="/productList"
            className="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400"
          >
            Read more
          </Link>
        </div>

        <div>
          <div className="relative">
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="/images/sachet.jpg"
              alt=""
            />

            <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-2xl">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="/images/sachet.jpg"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700">Lina sachet</h1>
                <p className="text-sm text-gray-500">Vaseline sachet</p>
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-xl font-semibold text-gray-800">SACHETS</h1>

          <hr className="w-32 my-6 text-indigo-500" />

          <p className="text-sm text-gray-500">
            Kromoto Manufacturing Company produces two types of sachet products.
            Lina Vaseline and Lina Sachet. As we always did; we designed,
            manufactured, packed and delivered these pretty and highly
            tandardized quality products to the market for ultimate satisfaction
            of our client.
          </p>
          <Link
            to="/productList"
            className="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400"
          >
            Read more
          </Link>
        </div>
        <div>
          <div className="relative">
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="/images/pr2.jpeg"
              alt=""
            />

            <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-2xl">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="/images/pr2.jpeg"

                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700">Pet preform</h1>
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-xl font-semibold text-gray-800">Preform</h1>

          <hr className="w-32 my-6 text-indigo-500" />

          <p className="text-sm text-gray-500">
            A PET preform is an intermediate product that is subsequently blown
            into a polyethylene terephthalate (PET) container. Preforms vary in
            neck finish, weight, colour and shape.
          </p>
          <Link
            to="/productList"
            className="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
