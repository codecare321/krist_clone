import { useState } from "react";
import SignupImage from "../assets/SingupImage.png";
import LogoImage from "../assets/logo.png";
import TextField from "../components/TextField/TextField";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  function clickHandler(e) {
    const { name, type, value, checked } = e.target;
    console.log(name);

    if (type === "checkbox") {
      if (name === "agree") {
        setAgree(checked);
      }
    } else {
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      } else if (name === "firstName") {
        setFirstName(value);
      } else if (name === "lastName") {
        setLastName(value);
      }
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
              <h1 className="font-bold text-3xl ml-1">Create New Account</h1>
              <h2 className="text-gray-400 text-xs mt-2">
                Please enter details
              </h2>

              <h2 className="text-gray-600 text-sm mt-6">First Name</h2>
              <TextField
                name="firstName"
                value={firstName}
                onChange={clickHandler}
                type="text"
                placeholder="Enter Your FirstName"
                className="mt-2"
              />
              <h2 className="text-gray-600 text-sm mt-6">Last Name</h2>
              <TextField
                name="lastName"
                value={LastName}
                onChange={clickHandler}
                type="text"
                placeholder="Enter Your LastName"
                className="mt-2"
              />

              <h2 className="text-gray-600 text-sm mt-6">Email Address</h2>

              <TextField
                name="email"
                value={email}
                onChange={clickHandler}
                type="text"
                placeholder="Enter your email"
                className="mt-2"
              />

              <h2 className="text-gray-600 text-sm mt-6">Password</h2>

              <TextField
                name="password"
                value={password}
                onChange={clickHandler}
                type="password"
                placeholder="Enter your password"
                className="mt-2"
              />

              <div className="flex m-2 items-center justify-between">
                <div className="flex items-center">
                  <TextField
                    name="agree"
                    value={agree}
                    onChange={clickHandler}
                    type="checkbox"
                  />
                  <span className="m-1.5 text-sm text-gray-600">
                    I agree to the <b> Terms & Conditions</b>
                  </span>
                </div>
              </div>
              <Button
                onClick={() => console.log("Button clicked")}
                className="rounded-lg shadow-md w-full mt-8 h-12 text-white text-md "
                type="submit"
              >
                Sign Up
              </Button>

              <p className="flex justify-end m-4 gap-1">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
