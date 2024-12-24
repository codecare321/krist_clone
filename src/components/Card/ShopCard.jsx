import WomenImage from "../../assets/signInImage.png";
import Button from "../Button/Button";

function ShopCard() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 ml-14">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[300px] rounded-md overflow-hidden mx-6 group"
          >
            <img
              src={WomenImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  absolute left-5 bottom-5 z-10 text-white w-[calc(100%-40px)]">
              <Button
                backgroundColor="white"
                textColor="black"
                className="rounded-lg w-full p-0 m-0 hover:scale-110 transition-transform"
              >
                Casual Wear
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCard;
