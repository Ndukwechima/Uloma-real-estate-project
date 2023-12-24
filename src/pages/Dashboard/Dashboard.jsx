
import { NavLink } from "react-router-dom";
import Uloma from "../../assets/images/uloma white.png";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";
import { BiGitCompare } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const Dashboard = () => {
    return (
        <>
            <div className="fixed top-0 w-[100vw] min-h-[100vh] h-auto bg-darkBlue p-5 flex  justify-between">
                <div className="h-[100vh] relative  p-4 flex items-start justify-start flex-col box-border border-r-2 border-white gap-4">
                    <NavLink to={"/"} className=" ">
                        <img src={Uloma} alt="uloma-logo" className='logo-flip w-[100px]' />
                    </NavLink>
                    <form className="flex p-1 items-center justify-between gap-2 bg-textGray rounded-md">
                        <IoSearchOutline className="text-gray-800" />
                        <input type="" placeholder="Search" className="placeholder-gray-800 bg-transparent border-none outline-none text-gray-800" />
                    </form>
                    <select name="menu" id="" className="bg-transparent border-none outline-none"> 
                        <option value="selected">Menu</option>
                        <option value="">List</option>
                        <option value=""> Edit</option>
                        <option value="">Remove</option>
                    </select>
                    <figure className="flex gap-3 items-center justify-center cursor-pointer">
                        <BiSolidHome />
                        <figcaption className="hover:border-b-2 hover:text-white hover:border-lightBlue"> Rent</figcaption>
                    </figure>
                    <figure className="flex gap-3 items-center justify-center cursor-pointer">
                        <BiGitCompare />
                        <figcaption className="hover:border-b-2 hover:text-white hover:border-lightBlue"> Compare</figcaption>
                    </figure>
                    <figure className="flex gap-3 items-center justify-center cursor-pointer">
                        <IoIosSettings />
                        <figcaption className="hover:border-b-2 hover:text-white hover:border-lightBlue">Settings</figcaption>
                    </figure>
                    <div className="bg-textOrange absolute bottom-10 py-1 pl-2 pr-8 rounded-md cursor-pointer">
                        <figure className="flex gap-3 items-center justify-center" >
                            <IoLogOut className="text-gray-900" />
                            <figcaption className="text-gray-900 font-bold cursor-pointer">Logout</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="flex items-center justify-center  w-[80%]"> welcome to uloma</div>
            </div>
        </>
      )
}

export default Dashboard