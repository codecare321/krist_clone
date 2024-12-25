import { useState } from "react";
import SignInImage from "../assets/signInImage.png";
import LogoImage from "../assets/logo.png";
import TextField from "../components/TextField/TextField";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill out all fields");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="h-[100vh] m-4 border-2 border-solid">
      <form onSubmit={handleSubmit} className="flex h-full">
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
            src={SignInImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex items-center ml-8">
          <div className="w-[600px]">
            <h1 className="font-bold text-3xl ml-1">Welcome 👋</h1>
            <h2 className="text-gray-400 text-xs mt-2">Please login here</h2>
            <h2 className="text-gray-600 text-sm mt-6">Email Address</h2>
            <TextField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
              className="mt-2"
            />
            <h2 className="text-gray-600 text-sm mt-6">Password</h2>
            <TextField
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="mt-2"
            />
            <div className="flex m-2 items-center justify-between">
              <div className="flex items-center">
                <TextField
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  type="checkbox"
                />
                <span className="m-1.5 text-sm text-gray-600">Remember Me</span>
              </div>
              <Link
                to="/forgotPassword"
                className="m-1.5 text-sm text-gray-600"
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              onClick={() => {}}
              className="rounded-lg shadow-md w-full bg-black mt-8 h-12 text-white text-md"
              type="submit"
            >
              Sign In
            </Button>
            <p className="flex justify-end m-4 gap-1">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
