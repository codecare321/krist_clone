import { FaArrowRight } from "react-icons/fa";
import WomenImage from "../../assets/signInImage.png";
import Button from "../Button/Button";
function Deals() {
  return (
    <div className="m-20 flex items-start justify-between">
      <div className="w-1/2 mt-20 ml-20">
        <h1 className="text-2xl font-light text-gray-800 leading-tight tracking-normal">
          Deals of the Month
        </h1>

        <p className="mt-4 text-md text-gray-600 font-extralight leading-relaxed tracking-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          possimus dignissimos ut atque sapiente architecto officiis, neque
          suscipit, blanditiis veniam, a minima? Numquam dolor optio illum eum
          temporibus enim voluptatibus.
        </p>

        <div className="flex gap-4">
          <div className="mt-8 border rounded-lg w-20 h-20 flex flex-col items-center justify-center text-center p-1">
            <p className="font-bold text-xl">120</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="mt-8 border rounded-lg w-20 h-20 flex flex-col items-center justify-center text-center p-1">
            <p className="font-bold text-xl">18</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="mt-8 border rounded-lg w-20 h-20 flex flex-col items-center justify-center text-center p-1">
            <p className="font-bold text-xl">15</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="mt-8 border rounded-lg w-20 h-20 flex flex-col items-center justify-center text-center p-1">
            <p className="font-bold text-xl">10</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>

        <div>
          <Button
            onClick={() => {}}
            className="mt-10 p-4 flex items-center bg-black text-white text-md font-light rounded-lg hover:bg-gray-800"
          >
            View All Products
            <FaArrowRight className="ml-2 text-white" size={12} />
          </Button>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <div className="relative w-[60%] rounded-md overflow-hidden shadow-lg group">
          <img
            src={WomenImage}
            alt="dealImage"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="text-white text-xl font-semibold  border p-2">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
