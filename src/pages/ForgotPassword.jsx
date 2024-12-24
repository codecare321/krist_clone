import LogoImage from "../assets/logo.png";
import SignupImage from "../assets/forgotImage.png";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../components/TextField/TextField";
import { useState } from "react";
import Button from "../components/Button/Button";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function clickHandler(e) {
    const { name, value } = e.target;
    console.log(name);

    if (name === "email") {
      setEmail(value);
    }
  }
  return (
    <>
      <div className="h-[100vh] m-4 border-2 border-solid">
        <div className="flex h-full">
          <div className="w-1/2 relative border-r-2 border-gray-200">
            <div className="absolute flex items-center space-x-0 m-4">
              <img
                src={LogoImage}
                alt="logo"
                className="h-[40px] m-0 p-0 object-contain"
              />
              <span className="font-semibold text-[26px] leading-none m-0 p-0">
                krist
              </span>
            </div>
            <img
              src={SignupImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2 flex items-center ml-8">
            <div className="w-[600px]">
              <Link to="/login" className="flex items-center gap-1">
                <IoChevronBackOutline size={24} />
                <span className="text-md text-gray-600">Back</span>
              </Link>

              <p className="mt-6 text-black font-bold text-3xl ">
                Forgot Password
              </p>

              <p className="mt-6 text-grey-700 font-semi-bold text-sm leading-6 break-words max-w-[400px] ">
                Enter your registered email address. We’ll send you a code to
                reset your password.
              </p>

              <h2 className="text-gray-600 text-sm mt-6">Email Address</h2>
              <TextField
                name="email"
                value={email}
                onChange={clickHandler}
                type="text"
                placeholder="Enter your email"
                className="mt-2"
              />

              <Button
                onClick={() => navigate("/verifyOtp")}
                className="rounded-lg shadow-md w-full text-white bg-black mt-8 h-12  text-md "
                type="submit"
              >
                Send Otp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
