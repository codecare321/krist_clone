import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import TextField from "../components/TextField/TextField";
import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { Slider } from "primereact/slider";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { ListBulletIcon } from "@heroicons/react/24/outline";

function AllProducts() {
  const [men, setMen] = useState(false);
  const [size, setSize] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
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
          <div className="ml-10 w-[40%] flex gap-2">
            <Squares2X2Icon className="text-gray-600 hover:text-gray-900 w-6 h-6 cursor-pointer" />
            <ListBulletIcon className="text-gray-600 hover:text-gray-900 w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
