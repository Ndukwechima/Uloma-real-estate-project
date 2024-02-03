import { IoLocationSharp } from "react-icons/io5";

const Available = () => {
  return (
    <div>
      <div className="">
        <figure className=" hidden bg-darkBlue w-64 lg:flex items-center justify-between gap-3 mt-5 md:mt-0 px-10 py-2 rounded-2xl">
          <IoLocationSharp />
          <figcaption className="available">Available in Abia State</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Available;
