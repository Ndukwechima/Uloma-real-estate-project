import Logo from '../../assets/images/uloma white.png';
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';



const Footer = () => {
  return (
    <div className=" bg-darkBlue h-[auto] flex flex-col  ">
      <div className='flex flex-col lg:flex-row md:gap-10 items-center justify-between md:px-40 py-10 '>
        <div className=' w-[100vw]  p-10 flex-1 flex flex-wrap items-center justify-around md:items-center md:p-20 md:gap-5 flex-col'>
          <NavLink to={"/"} className="btn btn-ghost text-xl w-[30%">
            <img src={Logo} alt="uloma-logo" className='w-[100px]' />
          </NavLink>
          <p className=' text-left text-md'>At Uloma Estate LTD, our mission is to provide comprehensive property management that empowers landlords and businesses to manage their properties and tenants. </p>
          <div className='flex gap-4 items-center justify-start w-[80%]'>
            <span className='flex items-center justify-center  p-3 box-border bg-darkBlue text-white rounded-full'><TfiFacebook className='text-white' /></span>
            <span className='flex items-center justify-center  p-3 box-border bg-darkBlue text-white rounded-full'><BsTwitter /></span>
            <span className='flex items-center justify-center  p-3 box-border bg-darkBlue text-white rounded-full'><FaLinkedinIn /></span>
            <span className='flex items-center justify-center  p-3 box-border bg-darkBlue text-white rounded-full'><CgInstagram /></span>
          </div>
        </div>
        <div className='w-[100vw]  p-10 flex-1  flex flex-wrap items-center justify-around md:items-start md:p-0 flex-col '>
          <div className='p-3 w-full flex items-center justify-center md:p-1'>Home</div>
          <div className='p-3 w-full flex items-center justify-center md:p-1'>Services</div>
          <div className='p-3 w-full flex items-center justify-center md:p-1'>About</div>
          <div className='p-3 w-full flex items-center justify-center md:p-1'>Blog</div>
          <div className='p-3 w-full flex items-center justify-center md:p-1'>Sign Up </div>
          <div className='p-3 w-full flex items-center justify-center md:p-1'>Log Ing</div>
        </div>
        <div className='w-full px-10 md:flex-1 flex items-center justify-around gap-2 flex-col md:items-start md:p-0 md:justify-center box-border'>
          <figure className='p-3 w-full flex items-center justify-center md:p-1'>
            <MdEmail className=' ' />
            <figcaption>hello@uloma.com</figcaption>
          </figure>
          <figure className='p-3 w-full flex items-center justify-center md:p-1'>
            <FaPhone className=' ' />
            <figcaption> +2348038362614 </figcaption>
          </figure>
          <figure className='p-3  w-full flex items-center justify-center md:p-1'>
            <FaLocationDot className='' />
            <figcaption> Aba. Abia State</figcaption>
          </figure>
        </div>
        <div className='w-full mt-5 md:flex-1 flex flex-col items-center justify-center gap-4 md:gap-0 md:items-start md:mt-0'>
          <div className='p-3  w-full flex items-center justify-center md:p-1'>Privacy Policy</div>
          <div className='p-3  w-full flex items-center justify-center md:p-1'>Terms of Services</div>
        </div>
      </div>
      <div className='text-textGrey flex items-center justify-center p-5'> Uloma 2023. All rights reserved</div>
        
    </div>
  )
};

export default Footer;
