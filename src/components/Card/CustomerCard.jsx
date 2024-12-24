import { FaStar } from "react-icons/fa";
import WomenImage from "../../assets/signInImage.png";

function CustomerCard() {
  return (
    <>
      <div className="bg-white p-4 shadow-md  rounded-lg h-30 w-30 inline-block mt-8">
        <div className="flex p-2">
          <FaStar className="text-amber-500" size={20} />
          <FaStar className="text-amber-500" size={20} />
          <FaStar className="text-amber-500" size={20} />
          <FaStar className="text-amber-500" size={20} />
          <FaStar className="text-amber-500" size={20} />
        </div>
        <div className="max-w-xs mx-auto text-sm mt-1  ml-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nisi
          tempore molestias aut accusantium sapiente sequi expedita temporibus
          asperiores nemo.
        </div>

        <div className="mt-6 flex ">
          <img
            src={WomenImage}
            alt="customerImage"
            className="rounded-full h-12 w-12"
          />

          <div className="ml-2 flex flex-col justify-center items-start gap-1">
            <p className="font-bold text-xs">Leslie Alexander</p>
            <p className="font-light text-xs  text-gray-400">Model</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomerCard;
