import ProductShow from "../../components/views/contribution";

export default function AboutPage() {
  return (
    <main>
      <section>
        <div className="relative grid w-full bg-gray-dark3 h-96 lg:h-[32rem] place-items-center">
          <div className="flex flex-col items-center mx-auto text-center">
            <h1 className="text-4xl font-semibold text-white uppercase md:text-6xl">
              ABOUT US
            </h1>

            <p className="mt-6 text-lg leading-5 text-white">
              The best in town.
            </p>

            <a
              href="#about"
              className="mt-8 cursor-pointer animate-bounce scroll-smooth"
            >
              <svg
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="#65A30D"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="27"
                  cy="26"
                  r="18"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <svg
          className=""
          viewBox="0 0 1440 57"
          fill="#334155"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
        </svg>
      </section>

      <section className="container px-6 py-8 mx-auto lg:py-16 " id="about">
        <div className="lg:flex lg:items-center lg:-mx-4">
          <div className="lg:w-1/2 lg:px-4">
            <h3 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">
              The company
            </h3>

            <p className="mt-6 text-gray-500 ">
              kromoto manufacturing plc has been established in january,2009 by
              two innovative investors with apaid up capital of birr 10 million
              to engage in manufacturing of cosmetics products. the company is
              sited is a 9000M2 land area which has been secured from Dire dawa
              Administrative councel on a lease bases.
            </p>

            <button className="flex items-center mt-8 -mx-2 text-indigo-500"></button>
          </div>

          <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
            <img
              className="object-cover w-full rounded-xl h-96"
              src="/images/design.jpg"
              alt="Video thumbnail"
            />
          </div>
        </div>
      </section>

      <section className="container px-6 py-8 mx-auto lg:py-16">
        <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
            <span className="inline-block text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize">
              Passion
            </h1>

            <p className="text-gray-500">
              we are passionate about our innovative cosmotic products
              originated from various naturally active ingredients which are
              extracted from plants which are raised by the purest Ethiopian
              mountain spring water.
            </p>
          </div>

          <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
            <span className="inline-block text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize">
              Company's initiation
            </h1>

            <p className="text-gray-500">
              kromoto manufaturing plc initiation is to provide good
              manufacturing practice (GMP) standards. we are continually
              striving to demonstrate our quality assurance and control
              mechanisms as clear and concise as possible.
            </p>
          </div>

          <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
            <span className="inline-block text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize">
              Vision
            </h1>

            <p className="text-gray-500">
              To obtain the lions share and be a leader in cosmetics and plastic
              industry by providing the market with high quality products that
              keeps ultimate satisfactions of the consumer.
            </p>
          </div>
        </div>
      </section>
      <ProductShow />
    </main>
  );
}
