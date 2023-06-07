import Button from "../../widgets/button";
import LongDownIcons from "../../icons/longdown";
export default function LandingHeader() {
  return (
    <main
      style={{ backgroundImage: "url(/images/bg-main.png)" }}
      className="flex flex-col justify-start pt-24 md:pt-64  space-y-48 bg-cover bg-center bg-gray-dark3 h-screen"
    >
      <div className="flex max-w-[1500px] mx-auto justify-center  h-3/5 items-center gap-x-16  text-white px-[5%]">
        <div className=" w-full px-[5%]">
          <p className="font-extrabold text-4xl md:text-6xl lg:text-8xl">
            Kromoto Manufacturing PLC
          </p>

          <p>
            Kromoto Manufacturing Plc has been established in January 2009 by
            two innovative investors with aggregate paid-up capital of birr 54
            million to engage in manufacturing of plastic and skin & haircare
            products.
          </p>
          <p className="text-4xl font-extrabold py-4">
          Lina - Pride of the Generation
          </p>
          {/* <div className="flex pt-16 mx-2 justify-start gap-x-10">
            <a
              href="#kl;"
              className="hover:animate-bounce mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500  dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Facebook"
            >
              <svg
                className="w-12 h-12 fill-white hover:fill-secondary-dark3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
              </svg>
            </a>


            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>

            <a
              href="#m,."
              className="hover:animate-bounce mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Github"
            >
              <svg
                className="w-12 h-12 fill-white hover:fill-secondary-dark1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div> */}
        </div>
        <div className="flex md:w-3/5 h-full mt-32">
          {/* <div className="">
            <img
              className="w-full h-full rounded-2xl"
              src="/images/mainImage.png"
              alt=""
            />
          </div> */}
        </div>
      </div>
      {/* <div className=" mx-auto text-center  space-y-8">
        <Button text="EXPLORE NOW" />
        <div className="w-8 mx-auto animate-bounce">
          <LongDownIcons />
        </div>
      </div> */}
    </main>
  );
}
