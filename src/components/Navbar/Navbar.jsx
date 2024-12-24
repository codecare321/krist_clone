import { useState, useEffect, useRef } from "react";
import { RiSearchLine } from "react-icons/ri";
import LogoImage from "../../assets/logo.png";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping, FaChevronDown } from "react-icons/fa6";
import Button from "../Button/Button";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex h-20 px-8 justify-between items-center bg-white ">
      <img src={LogoImage} alt="logo" className="h-12" />
      <div>
        <ul className="flex items-center gap-8 text-lg font-medium text-gray-800">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
              onClick={toggleDropdown}
            >
              Shop <FaChevronDown size={14} />
            </div>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Men
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Women
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Kids
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Our Story</li>
          <li className="hover:text-blue-600 cursor-pointer">Blog</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        <RiSearchLine size={20} />
        <CiHeart size={20} />
        <FaCartShopping size={20} />
        <Button className="bg-black rounded-lg px-8 ml-6 p-2">Login</Button>
      </div>
    </div>
  );
}

export default Navbar;
