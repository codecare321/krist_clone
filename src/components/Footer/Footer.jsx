import {
  FaArrowRight,
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGooglePay,
  FaPhoneAlt,
} from "react-icons/fa";
import CardImage from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-4">
        <div className="mx-20 flex">
          <div className="w-[25%] mt-10">
            <div className="flex items-center gap-2">
              <img
                src={CardImage}
                alt="footerImage"
                className="h-10 w-10 object-cover text-white bg-gray-400"
              />
              <p className="text-4xl font-thin">Krist</p>
            </div>
            <div className="flex items-center mt-10 gap-3 ">
              <FaPhoneAlt />
              <p className="text-gray-400">(704)555-0127</p>
            </div>
            <div className="flex items-center mt-4 gap-3 ">
              <MdEmail />
              <p className="text-gray-400">krist@example.com</p>
            </div>
            <div className="flex items-center mt-4 gap-3">
              <FaLocationDot className="text-gray-400 mb-6" />
              <p className="break-words max-w-[240px] text-gray-400">
                3891 Ranchview Dr. Richardson, California 62639
              </p>
            </div>
          </div>

          <div className="w-[25%] ">
            <div className="flex flex-col ml-4 mt-8 gap-4">
              <p className="text-white font-bold ">information</p>
              <p className="text-gray-400 font-bold ">My Account</p>
              <p className="text-gray-400 font-bold ">Login</p>
              <p className="text-gray-400 font-bold ">My Cart</p>
              <p className="text-gray-400 font-bold ">My Wishlist</p>
              <p className="text-gray-400 font-bold ">Checkout</p>
            </div>
          </div>
          <div className="w-[25%] ">
            <div className="flex flex-col  mt-8 gap-4">
              <p className="text-white font-bold ">Service</p>
              <p className="text-gray-400 font-bold ">About us</p>
              <p className="text-gray-400 font-bold ">Careers</p>
              <p className="text-gray-400 font-bold ">Delivery Information</p>
              <p className="text-gray-400 font-bold ">Privacy Policy</p>
              <p className="text-gray-400 font-bold ">Terms & conditions</p>
            </div>
          </div>
          <div className="w-[25%]">
            <div className="flex flex-col mt-4 gap-4">
              <p className="text-white font-bold">Subscribe</p>
              <div className="relative mt-4">
                <p className="text-white break-words">
                  Enter Your email here for receiving newsletters and updates.
                </p>
                <div className="relative mb-6 mt-4">
                  <MdEmail className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-white" />

                  <input
                    type="text"
                    className="bg-black text-white pl-12 pr-10 p-2.5 rounded-lg border-2 border-gray-400 w-full"
                    placeholder="Your email"
                  />
                  <FaArrowRight className="text-white absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-20 mt-6">
          <div className="border-t border-gray-600 mt-4"></div>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-3">
              <FaCcVisa size={30} />
              <FaCcMastercard size={30} />
              <FaGooglePay
                className="bg-white h-[23px] w-[30px] mt-1 p-1 rounded-sm text-black flex items-center justify-center"
                size={30} 
              />
              <FaCcAmex size={30} />
              <FaCcPaypal size={30} />
            </div>
            <div>
              <p className="text-gray-400 text-sm ">
                © 2024 Krist All Rights are reserved
              </p>
            </div>
            <div className="flex gap-3 mr-4">
              <RiFacebookFill size={20} />
              <FiInstagram size={20} />
              <GrTwitter size={20} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
