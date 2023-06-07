export default function ContactPage() {
  return (
    <div className="bg-primary-white text-primary-black pt-16 lg:pt-32">
      <section id="contact" className="font-mono ">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12 gap-y-8">
            <h1 className="contact sm:text-5xl text-2xl font-medium  mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
              If you have any questions, inquiries, or feedback, please do not
              hesitate to get in touch with us. Our knowledgeable and friendly
              team is ready to assist you in any way possible.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row items-center max-w-[1200px] mx-auto justify-center lg:justify-between font-mono py-8 px-[5%]">
        <div className="w-full ">
          <div className="flex items-center  rounded-md p-4">
            <div className="icon bg-primary-yellow rounded-full p-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="#84CC16"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
                />
                <circle cx="12" cy="10" r="3" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 className=" font-bold">Head  Quarters</h3>
              <p className="">
                Dire dawa, ETHIOPIA
              </p>
              <p className="pt-4">
              Dire Dawa Industry Zone, Near SelenDawa Cotton FactoryDire 
              </p>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex items-center rounded-md p-4">
            <div className="icon bg-primary-yellow rounded-full p-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="#84CC16"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16.5 15.5v-3a1 1 0 0 0-1-1h-2.5a2 2 0 0 1-2-2v-2.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1V9a2 2 0 0 1-2 2H5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h1.5"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 7.5a3.5 3.5 0 0 0-3.5 3.5v1"
                />
              </svg>
            </div>
            <div>
              <h3 className=" font-bold">Contact Address</h3>
              <p className=""> +251-254-11 4132</p>
              <p className="pt-4"> +251-254-11 1525</p>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex items-center  rounded-md p-4">
            <div className="icon bg-primary-yellow rounded-full p-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="#84CC16"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 9L12 15L4 9"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 9v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 3H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                />
              </svg>
            </div>
            <div>
              <h3 className=" font-bold">Email Us</h3>
              <p className="">info@kromotto.com</p>
              <p className="pt-4">contact@kromotto.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  justify-between px-[5%] max-w-[1500px] mx-auto  gap-8 ">
        <section className="w-full text-gray-600 body-font rounded-lg">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.698965549579!2d41.800322575985966!3d9.621167490465753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1630fdc9350c88f7%3A0xf600b7848d87cf26!2sKromoto%20Plc!5e0!3m2!1sam!2set!4v1682459884665!5m2!1sam!2set"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </section>
        <section className="w-full bg-gray-light1 rounded-lg">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:">
              Send us a message
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Send us what you want and we will contact you immediately.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm  text-center text-primary-white rounded-lg bg-success-dark1 font-semibold sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
