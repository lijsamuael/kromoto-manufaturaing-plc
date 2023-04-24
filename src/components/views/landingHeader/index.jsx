import LongDownIcon from "../../icons/longdown";
import Button from "../../widgets/button";
export default function LandingHeader() {
  return (
    <main
      style={{ backgroundImage: "url(/images/bg-main.png)" }}
      className="flex flex-col justify-center  space-y-48 bg-cover bg-center bg-gray-dark3 h-screen"
    >
      <div className="w-full z-100 bg-graccent-gray-dark3 text-primary-white max-w-[1000px] mx-auto  space-y-8">
        <p className="text-4xl text-center font-bold tracking-widest">
          NOW WE ARE ONLINE!
        </p>
        <p className="text-xl text-center  tracking-widest line-clamp-3">
          Adopting latest technology improves effective and efficient
          utilization of resources. We known for manufacturing of plastic and
          skin & haircare products. New technology, skilled man power and R&D
          are the featurs of our company.
        </p>
      </div>
      <div className=" mx-auto text-center  space-y-8">
        <Button
          text="EXPLORE NOW"
        />
        <div className="w-8 mx-auto animate-bounce">
          <LongDownIcon />
        </div>
      </div>
    </main>
  );
}
