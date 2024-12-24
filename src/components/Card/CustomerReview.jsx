import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CustomerCard from "./CustomerCard";

function CustomerReview() {
  const items = [1, 2, 3, 4];
  return (
    <>
      <div className="bg-gray-50 p-2">
        <div className="flex justify-between items-center font-normal text-2xl mx-20 my-6 ">
          <p className="text-3xl font-light">What our Customer Say&apos;s</p>
          <div className="flex gap-2">
            <div className="border bg-gray-300 p-4 rounded-lg">
              <FaArrowLeft className=" text-black" size={16} />
            </div>
            <div className="border bg-black p-4 rounded-lg">
              <FaArrowRight className=" text-white" size={16} />
            </div>
          </div>
        </div>

        <div className="flex justify-start mx-20 gap-6 flex-wrap mt-6">
          {items.map((item, index) => {
            return <CustomerCard key={index} />;
          })}
        </div>
        <div className="mb-10"></div>
      </div>
    </>
  );
}

export default CustomerReview;
