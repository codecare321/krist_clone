import { MdAttachMoney } from "react-icons/md";
import WomenImage from "../../assets/VerifyOtp.png";

function InstagramStories() {
  const items = [1, 2, 3, 4];
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20 gap-6">
        <div>
          <h1 className="text-2xl font-light text-center">
            Our Instagram Stories
          </h1>
          <div className="flex gap-6 mt-4">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-2 ">
                <img
                  src={WomenImage}
                  className="max-w-xs md:h-[200px] sm:h-[200px] lg:h-[300px] object-cover"
                  alt=""
                />

                <div className="mt-2 ml-4  gap-1 flex flex-col">
                  <div className="mb-10"></div>
                  <div className="flex items-center justify-center rounded-full bg-white shadow-md h-8 w-8">
                    <MdAttachMoney className="text-lg text-green-500" />
                  </div>

                  <h1 className="font-bold text-1xl mt-3">Money Guarantee</h1>

                  <h2 className="font-light text-sm">
                    Within 30 days for an exchange
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramStories;
