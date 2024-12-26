import { IoIosArrowForward } from "react-icons/io";
import { useText } from "../contexts/TextContext";
import dress from "../assets/dress.png";
function Product() {
  const texts = useText();

  return (
    <>
      <div className="mt-24 mx-20 mb-20">
        <div className="header">
          <h1>{texts.homepage.title}</h1>
          <h1 className="flex items-center gap-2 text-sm ">
            {texts.product.header} <IoIosArrowForward size={16} />
            {texts.product.allProducts} <IoIosArrowForward size={16} />{" "}
            {texts.product.specificProduct}
          </h1>
        </div>
        <div>
          <div className="w-[40%] mt-10 bg-red">
            <img src={dress} alt="" className="m-20" />
          </div>
          <div className="w-[60%]"></div>
        </div>
      </div>
    </>
  );
}

export default Product;
