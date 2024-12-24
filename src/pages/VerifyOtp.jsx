import LogoImage from "../assets/logo.png";
import SignupImage from "../assets/VerifyOtp.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { IoChevronBackOutline } from "react-icons/io5";
import OTPInput from "react-otp-input";
import { useState } from "react";
import Dialog from "../components/Dialog/Dialog";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
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
              alt="Signup"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2 flex items-center ml-8">
            <div className="w-[600px]">
              <Link to="/login" className="flex items-center gap-1">
                <IoChevronBackOutline size={24} />
                <span className="text-md text-gray-600">Back</span>
              </Link>

              <p className="mt-6 text-black font-bold text-3xl ">Enter Otp</p>

              <p className="mt-6 text-gray-500 font-semi-bold text-sm leading-6 break-words max-w-[400px] ">
                We have shared a code to your registered email address
                robertfox@example.com
              </p>

              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={null}
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus={true}
                isInputNum={true}
                separator={<span style={{ width: "8px" }}></span>}
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  marginRight: "1rem",
                  fontSize: "2rem",
                  outline: "none",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              />

              <Button
                onClick={handleOpenDialog}
                className="rounded-lg shadow-md w-full bg-black mt-8 h-12  text-md "
                type="submit"
              >
                Verify
              </Button>

              <Dialog
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
                title="Password Changed Successfully"
                subtitle="Your password has been updated successfully."
                actions={
                  <Button onClick={handleBackToLogin} className="rounded-lg">
                    Back to Login
                  </Button>
                }
                image="/src/assets/1.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
