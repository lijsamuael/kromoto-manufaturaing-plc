import { Link } from "react-router-dom";

import CancelIcon from "../../icons/cancel";

export default function Sidebar({ onClose }) {
  return (
    <section className="fixed top-0 right-0 h-screen bg-yellow-400 ">
      <div className=" bg-gradient-to-l from-gray-500 to-gray-700 w-64 h-[100vh] items-end">
        <div className="flex flex-col gap-y-8 text-white font-mono font-bold mx-auto ">
          <button onClick={onClose} className="py-4 self-end px-[5%]">
            <CancelIcon />
          </button>
          <Link
            to="/"
            className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300"
          >
            ABOUT
          </Link>
          <Link
            to="products"
            className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300"
          >
            PRODUCTS
          </Link>
          <Link
            t0="productList"
            className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300"
          >
            PRODUCT LIST
          </Link>
          <Link
            to="portfolio"
            className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300"
          >
            PORTFOLIO
          </Link>
          <Link
            to="contact"
            className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}
