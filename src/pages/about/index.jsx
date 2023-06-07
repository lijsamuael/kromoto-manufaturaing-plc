import InstagramIcon from "../../components/icons/instragram";
import LinkedinIcon from "../../components/icons/linkedin";
import TelegramIcon from "../../components/icons/telegram";
import ProductShow from "../../components/views/contribution";
import data from "../../models/data.json";

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

      <section className="pb-16">
        <h1 className="text-center py-8 text-5xl font-bold">
          Our Team Members
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center xl:justify-between max-w-[1800px] gap-x-8 mx-auto px-[5%]">
          {data.team.map((item, index) => (
            <div key={index} className="shrink w-full  ">
              <div className="relative top-16 flex items-center justify-center ">
                <img
                  src={`/images/${item.image}`}
                  alt=""
                  className="border-gray-dark3 border-8 rounded-full w-40 h-40 object-cover z-10"
                />
              </div>
              <div className="text-center shadow-lg bg-primary-white hover:bg-secondary-light2 hover:scale-105 hover:duration-500  z-0 pt-20 font-mono space-y-6 px-4 rounded-lg py-2">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold whitespace-nowrap">
                    {item.name}
                  </h4>
                  <p className="text-sm whitespace-nowrap">{item.role}</p>
                </div>
                {/* <p>{item.description}</p> */}
                {/* <div className="flex justify-center items-center gap-x-8">
                  <a href="/" className="hover:animate-bounce">
                    <LinkedinIcon />
                  </a>
                  <a href="/" className="hover:animate-bounce">
                    <TelegramIcon />
                  </a>
                  <a href="/" className="hover:animate-bounce">
                    <InstagramIcon />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" container px-6 py-8 mx-auto lg:py-16 " id="about">
        <div className="lg:flex lg:items-center lg:-mx-4">
          <div className="lg:w-1/2 lg:px-4">
            <h3 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">
              The company
            </h3>

            <p className="mt-6 text-gray-500 ">
              kromoto manufacturing plc has been established in january,2009 by
              two innovative investors with apaid up capital of birr 52 million
              to engage in manufacturing of cosmetics products. The company is
              sited in a 7,000m<sup>2</sup> land area and The Factory Location
              is ideal to export markets.
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

      <section className=" mx-auto py-32">
        <p className="text-center text-4xl font-bold ">Sales Personnel</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 justify-center xl:justify-between max-w-[1800px] gap-x-8 mx-auto px-[5%]">
          <div className="shrink w-full  ">
            <div className="text-center shadow-lg bg-primary-white hover:bg-secondary-light2 hover:scale-105 hover:duration-500  z-0 pt-20 font-mono space-y-6 px-4 rounded-lg py-2">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold whitespace-nowrap">
                  Bililign Teklu{" "}
                </h4>
                <p className="text-sm whitespace-nowrap">+251-915-049766</p>
              </div>
            </div>
          </div>

          <div className="shrink w-full  ">
            <div className="text-center shadow-lg bg-primary-white hover:bg-secondary-light2 hover:scale-105 hover:duration-500  z-0 pt-20 font-mono space-y-6 px-4 rounded-lg py-2">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold whitespace-nowrap">
                  Natnael Tamirat
                </h4>
                <p className="text-sm whitespace-nowrap">+251-985-086777</p>
              </div>
            </div>
          </div>

          <div className="shrink w-full  ">
            <div className="text-center shadow-lg bg-primary-white hover:bg-secondary-light2 hover:scale-105 hover:duration-500  z-0 pt-20 font-mono space-y-6 px-4 rounded-lg py-2">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold whitespace-nowrap">
                  Lemlem Tasew{" "}
                </h4>
                <p className="text-sm whitespace-nowrap">+251-912-742317</p>
              </div>
            </div>
          </div>

          <div className="shrink w-full  ">
            <div className="text-center shadow-lg bg-primary-white hover:bg-secondary-light2 hover:scale-105 hover:duration-500  z-0 pt-20 font-mono space-y-6 px-4 rounded-lg py-2">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold whitespace-nowrap">
                  ALemayehu Takele
                </h4>
                <p className="text-sm whitespace-nowrap">+251-973-370018</p>
              </div>
            </div>
          </div>

          <div className="shrink w-full  ">
            <div className="text-center shadow-lg bg-primary-white hover:bg-secondary-light2 hover:scale-105 hover:duration-500  z-0 pt-20 font-mono space-y-6 px-4 rounded-lg py-2">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold whitespace-nowrap">
                  Hanan Alemu
                </h4>
                <p className="text-sm whitespace-nowrap">+251-932-459305</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-6 py-8 mx-auto lg:py-16">
        <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
            <span className="inline-block text-indigo-500">
              <img className="w-24" src="/gifs/love.gif" alt="" />
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
              <img className="w-24" src="/gifs/target.gif" alt="" />
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
              <img className="w-24" src="/gifs/eye.gif" alt="" />
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
