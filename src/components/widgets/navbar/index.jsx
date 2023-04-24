import { Link } from "react-router-dom";
import { useState } from "react";

import YellowMenuIcon from "../../icons/menu";
import Sidebar from "../sidebar";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className=" bg-gray-dark3 font-semibold bg-transparent text-white py-8 h-20 px-[5%]">
      <div className="flex justify-between lg:justify-around">
        <div className="text-success-dark1">
          <Link>KROMOTO MANUFACTURING PLC</Link>
        </div>
        <div className="hidden lg:flex gap-x-8">
          <Link to="/" className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300">
            HOME
          </Link>
          <Link to="/about" className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300">
            ABOUT
          </Link>
          <Link to="/products" className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300">
            PRODUCTS
          </Link>
          <Link to="/productList" className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300">
            PRODUCT LIST
          </Link>
          <Link to="/portfolio" className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300">
            PORTFOLIO
          </Link>
          <Link to="/contact" className="hover:border-b-2 border-success-dark1 active:border-b-2 active:text-yellow-300">
            CONTACT US
          </Link>
        </div>
        <div className=" flex lg:hidden">
          <button onClick={openModal}>
            <YellowMenuIcon className="text-white" />
          </button>
        </div>
      </div>
      {isModalOpen && <Sidebar onClose={closeModal} />}
    </nav>
  );
}
