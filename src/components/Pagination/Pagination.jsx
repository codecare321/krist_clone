import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Pagination = () => {
  //   const pages = [1, 2, 3, 4];

  return (
    <div className="mt-40 gap-2 flex justify-end mr-20 ">
      <div className="flex gap-2">
        <div className="flex items-center justify-center">
          <BsArrowLeftShort size={30} className="mt-1" />
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex  p-2 bg-black rounded-md text-white h-10 w-10 justify-center items-center">
            <p className="text-center text-lg">1</p>
          </div>

          <div className="flex  p-2 bg-black rounded-md text-white h-10 w-10 justify-center items-center">
            <p className="text-center text-lg">2</p>
          </div>

          <div className="flex  p-2 bg-black rounded-md text-white h-10 w-10 justify-center items-center">
            <p className="text-center text-lg">3</p>
          </div>

          <div className="flex  p-2 bg-black rounded-md text-white h-10 w-10 justify-center items-center">
            <p className="text-center text-lg">4</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <BsArrowRightShort size={30} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
