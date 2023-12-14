
import Logo from '../../assets/images/uloma white.png';
import { IoSearchOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { NavLink } from 'react-router-dom'


const Header = () => {
  return( 
    <div className='mx-auto h-[10vh] lg:h-[20vh] bg-darkBlue flex items-center justify-center z-50'>
      <div className="navbar flex items-center justify-between mx-auto">
        <div className="flex-1 flex items-center gap-10 px-2 justify-start">
          <NavLink to={"/"} className="btn btn-ghost text-xl w-[30%">
            <img src={Logo} alt="uloma-logo" className='logo-flip w-[100px]' />
          </NavLink>
            <form className="hidden md:flex items-center justify-between gap-4 bg-white  rounded-3xl px-5  box-border w-96">
              <input type="" placeholder="What are you looking for?" className="flex- py-2  px- border-none outline-none bg-white w-full" />
              <IoSearchOutline className=''/>
            </form>
        </div>
        
        <div className="flex-1 lg:h-[10vh] mx-auto  gap-2 items-center justify-end">
          <ul className='hidden lg:h-[10vh] lg:flex lg:items-center lg:justify-center'>
            <li className='lg:h-[10vh] flex items-center justify-center hover:opacity-90 bg-darkBlue'><NavLink to={"/"} className="nav lg:h-[10vh] flex justify-center items-center w-[100%] p-3 ">Home</NavLink></li>
            <li className=' lg:h-[10vh] p-3 flex items-center justify-center'><NavLink to={"/About"} className="nav lg:h-[10vh] flex justify-center items-center w-[100%] p-3" >About</NavLink></li>
            <li className='lg:h-[10vh] p-3 flex items-center justify-center'><NavLink to={"/Services"} className="nav lg:h-[10vh] flex justify-center items-center w-[100%] p-3">Services</NavLink></li>
            <li className='lg:h-[10vh]  p-3 flex items-center justify-center '><NavLink to={"/Contact"} className="nav lg:h-[10vh] flex justify-center items-center w-[100%] p-3">Contact</NavLink></li>
            <li className='lg:h-[10vh] p-3 flex items-center justify-center '><NavLink to={"/Blog"} className="nav lg:h-[10vh] flex justify-center items-center w-[100%] p-3">Blog</NavLink></li>
            <li className='lg:h-[10vh] p-3 flex items-center justify-center '><NavLink to={"/Signup"} className="nav lg:h-[10vh] flex justify-center items-center w-[100%] p-3 min-w-[100px]">Sign Up</NavLink></li>
            <li className='lg:h-[10vh] p-3 flex items-center justify-center '><NavLink to={"/Login"} className="nav lg:h-[10vh] flex justify-center items-center w-[100%] p-2 min-w-[80px]">Log In</NavLink></li>
          </ul>
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost  flex items-center justify-center">
              <div className="flex items-center justify-center ">
              <MdMenu className='text-5xl'/>
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className='p-3 flex items-center justify-center'><NavLink to={"/"}>Home</NavLink></li>
              <li className='p-3 flex items-center justify-center'><NavLink to={"/About"}>About</NavLink></li>
              <li className='p-3 flex items-center justify-center'><NavLink to={"/Services"}>Services</NavLink></li>
              <li className='p-3 flex items-center justify-center'><NavLink to={"/Contact"}>Contact</NavLink></li>
              <li className='p-3 flex items-center justify-center'><NavLink to={"/Blog"}>Blog</NavLink></li>
              <li className='p-3 flex items-center justify-center'><NavLink to={"/Signup"}>Sign Up</NavLink></li>
              <li className='p-3 flex items-center justify-center'><NavLink to={"/Login"}>Log In</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
