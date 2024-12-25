import { FaEye, FaStar } from "react-icons/fa";
import CardImage from "../../assets/SingupImage.png";
import Button from "../Button/Button";

function BestSeller() {
  const items = [1, 2, 3, 4, 5, 6];
  const style = { stroke: "black", strokeWidth: "40px", fill: "none" };
  return (
    <>
      <div className="overflow-x-auto mt-14">
        <p className="flex items-center justify-center mb-10 text-3xl font-light">
          Our Bestseller
        </p>
        <div className="flex gap-4 ml-14 ">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[300px] rounded-md overflow-hidden mx-6 group"
            >
              <img
                src={CardImage}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4 text-white text-2xl   flex-col items-end mx-4 my-4 ">
                  <button className="hover:scale-110 transition-transform rounded-full bg-white p-1">
                    <FaStar style={style} size={16} />
                  </button>

                  <button className="hover:scale-110 transition-transform rounded-full bg-white p-1">
                    <FaEye style={style} size={16} />
                  </button>
                </div>
              </div>

              <div className="group absolute left-5 bottom-5 z-10 text-white w-[calc(100%-40px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                onClick={()=>{}}
                  backgroundColor="white"
                  textColor="black"
                  className="rounded-lg w-full p-0 m-0 hover:scale-110 transition-transform bg-white"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 ml-14 mt-4">
          {items.map((item, index) => (
            <div key={index} className="w-[300px] ml-8">
              <h1 className="font-bold text-1xl">RoadStar</h1>
              <h2 className="font-normal mt-1 text-1xl">
                Printed Cotton T-shirt{" "}
              </h2>
              <h2 className=" flex gap-2 font-normal mt-1 text-1xl">
                <p className="font-light">$38.0</p>
                <strike>
                  <p className="flex text-gray-400">$40.0</p>{" "}
                </strike>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BestSeller;
