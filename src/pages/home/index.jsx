import CompanyDetail from "../../components/views/companyDetail";
import LandingHeader from "../../components/views/landingHeader";
import ProductList from "../../components/views/productList";
import ServiceHeader from "../../components/views/serviceHeader";
import Testimonial from "../../components/views/testmonial";

export default function HomePage() {
  return (
    <main className="">
      <LandingHeader />
      <ServiceHeader />
      <Testimonial />
      <ProductList />
      <CompanyDetail />
    </main>
  );
}
