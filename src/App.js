import { Route, Routes } from "react-router-dom";
import Footer from "./components/widgets/footer";
import Navbar from "./components/widgets/navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import ProductListPage from "./pages/productList";
import ContactPage from "./pages/contact";
import Admin from "./pages/admin/admin";

export default function App() {
  return (
    <div className="font-mono">
      <div className=" bg-cover bg-center bg-gray-dark3 ">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/productList" element={<ProductListPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
