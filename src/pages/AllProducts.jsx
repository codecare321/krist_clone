import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import TextField from "../components/TextField/TextField";
import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { Slider } from "primereact/slider";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button/Button";
import { FaEye, FaStar } from "react-icons/fa";
import CardImage from "../assets/SingupImage.png";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { useText } from "../contexts/TextContext";

import Pagination from "../components/Pagination/Pagination";
import { MdAttachMoney } from "react-icons/md";
function AllProducts() {
  const texts = useText();
  const [men, setMen] = useState(false);
  const [size, setSize] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const itemsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const style = { stroke: "black", strokeWidth: "50px", fill: "none" };

  function clickHandler(e) {
    const { name, type, value, checked } = e.target;
    console.log(name);

    if (type === "checkbox") {
      if (name === "men") {
        setMen(checked);
      }
      if (name === "size") {
        setSize(checked);
      }
    }
  }

  const items = [
    {
      name: "Men",
      color: "Red",
      background: "red",
    },
    {
      name: "Women",
      color: "Blue",

      background: "blue",
    },
    {
      name: "Kids",
      color: "orange",
      background: "orange",
    },
    {
      name: "Bags",
      color: "black",
      background: "black",
    },
    {
      name: "Belts",
      color: "green",
      background: "green",
    },
    {
      name: "Wallets",
      color: "yellow",
      background: "yellow",
    },
    {
      name: "Watches",
    },
    {
      name: "Accessories",
    },
    {
      name: "Winter Wear",
    },
  ];

  return (
    <>
      <div className="mt-24 mx-20 mb-20">
        <div>
          <h1>{texts.homepage.title}</h1>
          <h1 className="flex items-center gap-2 text-sm ">
            Shop <IoIosArrowForward size={16} />
            All Products
          </h1>
        </div>

        <div className="flex mt-10">
          <div className="w-[12%]  ">
            <div className="flex gap-2 justify-between items-center">
              <div className="flex items-center">
                <p className="font-bold">Product Categories</p>
              </div>

              <IoIosArrowUp size={16} />
            </div>
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mt-4 ml-2 flex gap-4 justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <TextField
                      name="men"
                      value={men}
                      onChange={clickHandler}
                      type="checkbox"
                    />
                    <p className="text-md">{item.name}</p>
                  </div>
                  {index <= 2 ? (
                    <HiOutlinePlus className="flex items-center" />
                  ) : null}
                </div>
              );
            })}
            <div className="flex gap-2 mt-8 justify-between items-center">
              <div className="flex items-center">
                <p className="font-bold">Filter By Price</p>
              </div>

              <IoIosArrowUp size={16} />
            </div>

            <div className="mt-6 w-[180px]">
              <p className="font-light">{`Price: $${priceRange[0]} - $${priceRange[1]}`}</p>

              <Slider
                className="ml-3 custom-slider flex items-center mt-4 w-[80%]"
                value={priceRange}
                onChange={(e) => setPriceRange(e.value)}
                range
              />
            </div>

            <div className="flex gap-2 mt-8 justify-between items-center">
              <div className="flex items-center">
                <p className="font-bold">Filter By Color</p>
              </div>

              <IoIosArrowUp size={16} />
            </div>

            {items.slice(0, 6).map((item, index) => {
              let bgColorClass = "";
              let number = 0;
              switch (item.background) {
                case "red":
                  bgColorClass = "bg-red-400";
                  number = "10";
                  break;
                case "blue":
                  bgColorClass = "bg-blue-400";
                  number = "14";
                  break;
                case "orange":
                  bgColorClass = "bg-orange-400";
                  number = "8";
                  break;
                case "black":
                  bgColorClass = "bg-black";
                  number = "9";
                  break;
                case "green":
                  bgColorClass = "bg-green-400";
                  number = "9";
                  break;
                case "yellow":
                  bgColorClass = "bg-yellow-400";
                  number = "9";
                  break;
                default:
                  bgColorClass = "bg-gray-400";
                  number = "9";
              }

              return (
                <div
                  key={index}
                  className="mt-4 ml-2 flex gap-4 justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-6 w-6 rounded-md border flex items-center ${bgColorClass}`}
                    ></div>

                    <p className="text-md">{item.color}</p>
                  </div>
                  <p>{number}</p>
                </div>
              );
            })}
            <div className="flex gap-2 mt-8 justify-between items-center ">
              <div className="flex items-center">
                <p className="font-bold">Filter By Size</p>
              </div>

              <IoIosArrowUp size={16} />
            </div>
            {items.slice(0, 6).map((item, index) => {
              let number = "";
              let number1 = 0;
              switch (item.background) {
                case "red":
                  number = "S";
                  number1 = "(6)";
                  break;
                case "blue":
                  number = "M";
                  number1 = "(20)";
                  break;
                case "orange":
                  number = "L";
                  number1 = "(7)";
                  break;
                case "black":
                  number = "Xl";
                  number1 = "(16)";
                  break;
                case "green":
                  number = "XXL";
                  number1 = "(10)";
                  break;
                case "yellow":
                  number = "XXL";
                  number1 = "(2)";
                  break;
                default:
              }

              return (
                <div
                  key={index}
                  className="mt-4 ml-2 flex gap-4 justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <TextField
                      name="size"
                      value={size}
                      onChange={clickHandler}
                      type="checkbox"
                    />
                    <p>{number}</p>
                  </div>
                  <p className="text-red">{number1}</p>
                </div>
              );
            })}
          </div>

          {/* second list  */}
          <div className="ml-10 w-[88%]">
            <div className="flex gap-2 h-[30px] items-center">
              <div className="flex items-center gap-1">
                <Squares2X2Icon className="text-gray-600 hover:text-gray-900 w-6 h-6 cursor-pointer" />
                <ListBulletIcon className="text-gray-600 hover:text-gray-900 w-6 h-6 cursor-pointer" />
                <p className="ml-2 text-md font-light">
                  Showing 1-16 of 72 results
                </p>
              </div>
              <p className="flex ml-auto items-center h-[30px] gap-0">
                Short by latest <IoIosArrowDown className="mt-1" />
              </p>
            </div>

            <div className="flex flex-wrap gap-y-24 mt-10 ">
              {itemsNumber.map((item, index) => (
                <div
                  key={index}
                  className="relative w-[200px] h-[300px] rounded-md mx-6 group"
                >
                  <img
                    src={CardImage}
                    alt="cardImage"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4 text-white text-2xl flex-col items-end mx-4 my-4 ">
                      <button className="hover:scale-110 transition-transform rounded-full bg-white p-1">
                        <FaStar style={style} size={16} />
                      </button>

                      <button className="hover:scale-110 transition-transform rounded-full bg-white p-1">
                        <HiArrowsRightLeft color="black" size={16} />
                      </button>
                      <button className="hover:scale-110 transition-transform rounded-full bg-white p-1">
                        <FaEye style={style} size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="group absolute left-5 bottom-5 z-10 text-white w-[calc(100%-40px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      onClick={() => {}}
                      backgroundColor="white"
                      textColor="black"
                      className="rounded-md w-full p-2 m-0 hover:scale-110 transition-transform bg-white"
                    >
                      Add To Cart
                    </Button>
                  </div>

                  <div className="mt-4  w-full ">
                    <h1 className="font-bold text-1xl">RoadStar</h1>
                    <h2 className="font-normal mt-1 text-1xl">
                      Printed Cotton T-shirt
                    </h2>
                    <h2 className="flex gap-2 font-normal mt-1 text-1xl">
                      <p className="font-light">$38.0</p>
                      <strike>
                        <p className="flex text-gray-400">$40.0</p>
                      </strike>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <Pagination />
            <div className="flex items-center  gap-[110px] mt-4">
              {items.map((item, index) =>
                index <= 3 ? (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-10 "
                  >
                    <div className="mt-2 ml-4  gap-1 flex flex-col">
                      <div className="mb-10"></div>
                      <div className="flex items-center justify-center rounded-full bg-white shadow-md h-8 w-8">
                        <MdAttachMoney className="text-lg text-green-500" />
                      </div>

                      <h1 className="font-bold text-1xl mt-3">
                        Money Guarantee
                      </h1>

                      <h2 className="font-light text-sm">
                        Within 30 days for an exchange
                      </h2>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
