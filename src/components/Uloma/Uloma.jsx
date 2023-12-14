
import { FaCirclePlus } from "react-icons/fa6";

function Uloma() {
  return (
    <div className="hidden md:flex items-center justify-between gap-10 md:gap-4 bg-darkBlue py-1 px-5 rounded-2xl absolute md:left-1 md:top-4 lg:top-14">
            <span className="bg-white rounded-full border-none">
              <FaCirclePlus className="text-textOrange text-4xl" />
            </span>
            <div>
              <h1>Uloma Real</h1>
              <h2>Estate Ltd</h2>
            </div>
    </div>
  )
}

export default Uloma