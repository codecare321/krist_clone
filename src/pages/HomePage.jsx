import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WomenImage from "../assets/signInImage.png";
import Button from "../components/Button/Button";
import ShopCard from "../components/Card/ShopCard";
import BestSeller from "../components/Card/BestSeller";
import Deals from "../components/Card/Deals";
import CustomerReview from "../components/Card/CustomerReview";

function HomePage() {
  return (
    <>
      <div className="w-full h-[700px]  relative overflow-hidden p-6 mt-20">
        {" "}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-white">
          {" "}
          {/* Positioned text */}
          <span className="text-black m-20 font-normal text-2xl">
            Classic Exclusive
          </span>
          <div className="mt-3">
            <span className="text-black m-20 font-bold text-4xl ">
              Women&apos;s Collections
            </span>
          </div>
          <div className="mt-3 ">
            <span className="text-black m-20 font-light text-1xl ">
              UPTO 40% OFF
            </span>
          </div>
          <div className="gap-1 flex items-center justify-start mt-6 px-20">
            <Button className="p-2 flex items-center bg-black text-white text-sm font-light rounded-lg hover:bg-gray-800">
              Shop Now
              <FaArrowRight className="ml-2 text-white" size={12} />
            </Button>
          </div>
        </div>
        <img
          src={WomenImage}
          alt="women collection"
          className="w-full h-full object-cover object-[center_10%]"
        />
      </div>
      <div className="flex justify-between items-center font-light text-2xl mx-20 my-6 ">
        <p>Shop by Category</p>
        <div className="flex gap-2">
          <div className="border bg-gray-300 p-4 rounded-lg">
            <FaArrowLeft className=" text-black" size={16} />
          </div>
          <div className="border bg-black p-4 rounded-lg">
            <FaArrowRight className=" text-white" size={16} />
          </div>
        </div>
      </div>

      <ShopCard />
      <BestSeller />
      <Deals />

      <CustomerReview />

      <div className="mb-40"></div>
    </>
  );
}

export default HomePage;
