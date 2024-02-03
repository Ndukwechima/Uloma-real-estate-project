import { useState } from "react";
import { NavLink } from "react-router-dom";
import Uloma from "../../assets/images/uloma white.png";
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";
import { BiGitCompare } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Palace from "../../assets/images/PRESIDENTIAL.jpeg";
import Family from "../../assets/images/family-home-475879.jpg";
import { GiHearts } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import House from "../../assets/images/house-5148865.jpg";
import FamHouse from "../../assets/images/pexels-curtis-adams-4119830.jpg";
import ModernHouse from "../../assets/images/pexels-expect-best-323780.jpg";
import Furniture from "../../assets/images/furniture.jpg";
import Estate from "../../assets/images/LUXURY.webp";
import Hostels from "../../assets/images/pexels-quentin-ecrepont-2275289.jpg";
import Estates1 from "../../assets/images/real-estate-3297625_1280.jpg";
import Sunny from "../../assets/images/pexels-sonny-sixteen-14019522.jpg";
import FamilyLodge from "../../assets/images/LUXURY1.jpg";
import Selfcon from "../../assets/images/pexels-ketut-subiyanto-4246234.jpg";
import Church from "../../assets/images/CHURCH.webp";
import DoubleStorey from "../../assets/images/Double-Storey.jpg";
import Woodhouse from "../../assets/images/WOODhouse.jpg";
import Mobilehome from "../../assets/images/MOBILEHOME.jpg";
import Mansion from "../../assets/images/MANSION.jpeg";
import School from "../../assets/images/SCHOOL.jpg";
import School1 from "../../assets/images/SCHOOL1.jpeg";
import Hotel from "../../assets/images/Hotel-Exterior-Design-plan.jpg";
import School2 from "../../assets/images/SCHOOL2.jpeg";
import Hotel2 from "../../assets/images/HOTEL2.jpeg";
import Home from "../../assets/images/HOTEL2.jpeg";
import Hotel3 from "../../assets/images/HOTEL3.jpg";
import School3 from "../../assets/images/SCHOOL3.jpg";
import Hotel4 from "../../assets/images/HOTEL4.jpg";
import School4 from "../../assets/images/SCHOOL4.jpg";
import School5 from "../../assets/images/SCHOOL5.jpg";
import School6 from "../../assets/images/SCHOOL6.jpg";
import Hotel5 from "../../assets/images/HOTEL5.jpeg";
import Hotel6 from "../../assets/images/HOTEL6.webp";
import Ballroom1 from "../../assets/images/ballroom-theatre-4.jpg";
import Conference from "../../assets/images/Event Center.jpeg";
import Conference1 from "../../assets/images/event1.jpg";
import Eventcenter from "../../assets/images/EVENTCENTER.jpg";
import Conference2 from "../../assets/images/CONFERENCE.webp";
import Conference3 from "../../assets/images/conference_room_2.jpg";
import Conference4 from "../../assets/images/conference3.jpg";
import Conference5 from "../../assets/images/CONFERENCE4.jpeg";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  let loadMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="z-40  w-full box-border min-h-[100vh] h-auto bg-darkBlue md:p-5 flex flex-col lg:flex-row  justify-between mt-[5rem]">
      <div className="lg:h-[100vh] bg-darkBlue p-6 md:px-10 md:gap-10 lg:fixed lg:top-0   lg:p-4 flex items-start justify-start flex-col box-border lg:border-r-2 lg:border-white gap-4">
        <NavLink to="/" className=" flex items-center justify-between  w-full">
          <img
            src={Uloma}
            alt="uloma-logo"
            className="logo-flip w-[150px] lg:w-[100px]"
          />
          <IoMenu
            onClick={loadMenu}
            className="text-3xl md:text-5xl lg:hidden"
          />
        </NavLink>
        {/* <div cl> */}
        <form
          id="search"
          className="flex w-full md:h-[50px] lg:h-[30px] p-1 items-center justify-between gap-2 bg-textGray rounded-md mt-[7rem]"
        >
          <IoSearchOutline className="text-gray-800 flex items-start justify-start md:h-[70%] md:w-[20%] md:text-sm" />
          <input
            type=""
            placeholder="Search"
            className="placeholder-gray-800 md:w-[70%] bg-transparent border-none outline-none text-gray-800"
          />
        </form>
        {/* </div> */}

        <div className=" w-full h-[35vh] hidden lg:flex flex-col p-5 items-start gap-4">
          <section className="bg-transparent border-none outline-none flex flex-col space-y-4">
            <NavLink
              to="/property"
              className=" bg-textOrange px-4 py-2 text-white rounded-full text-[14px]"
            >
              List Properties
            </NavLink>
            <button className="bg-textOrange px-3 py-1 text-white hover:text-white rounded-full text-[14px]">
              {" "}
              Edit
            </button>
          </section>
          <figure className="flex gap-3 items-center justify-center cursor-pointer">
            <BiSolidHome />
            <figcaption className="hover:border-b-2 hover:text-white hover:border-lightBlue">
              {" "}
              Rent
            </figcaption>
          </figure>
          <figure className="flex gap-3 items-center justify-center cursor-pointer">
            <BiGitCompare />
            <figcaption className="hover:border-b-2 hover:text-white hover:border-lightBlue">
              {" "}
              Compare
            </figcaption>
          </figure>
          <figure className="flex gap-3 items-center justify-center cursor-pointer">
            <IoIosSettings />
            <figcaption className="hover:border-b-2 hover:text-white hover:border-lightBlue">
              Settings
            </figcaption>
          </figure>
          <div className="bg-textOrange flex md:absolute md:bottom-10 py-1 px-4 text-darkBlue md:pr-8 rounded-md cursor-pointer">
            <figure className="flex gap-3 items-center justify-center">
              <IoLogOut className="text-gray-900" />
              <button> Logout </button>
            </figure>
          </div>
        </div>

        {showMenu && (
          <div className=" w-full h-[35vh] flex flex-col p-5 items-start gap-4">
            <select
              name="menu"
              id=""
              className="bg-transparent border-none outline-none md:text-2xl"
            >
              <option value="selected" className="">
                Menu
              </option>
              <option value="">List</option>
              <option value=""> Edit</option>
              <option value="">Remove</option>
            </select>
            <figure className="flex  w-full h-[20%] gap-3 items-center justify-start cursor-pointer">
              <BiSolidHome className="hover:border-b-2 flex items-center md:text-3xl md:h-[100%] hover:text-white hover:border-lightBlue" />
              <figcaption className="hover:border-b-2 flex items-center md:text-2xl md:h-[100%]   hover:text-white hover:border-lightBlue">
                {" "}
                Rent
              </figcaption>
            </figure>
            <figure className="flex w-full h-[20%] gap-3 items-center justify-start cursor-pointer">
              <BiGitCompare className="hover:border-b-2 flex items-center md:text-3xl md:h-[100%] hover:text-white hover:border-lightBlue" />
              <figcaption className="hover:border-b-2 flex items-center md:text-2xl md:h-[100%]   hover:text-white hover:border-lightBlue">
                {" "}
                Compare
              </figcaption>
            </figure>
            <figure className="flex w-full h-[20%] gap-3 items-center justify-start cursor-pointer">
              <IoIosSettings className="hover:border-b-2 flex items-center md:text-3xl md:h-[100%] hover:text-white hover:border-lightBlue" />
              <figcaption className="hover:border-b-2 flex items-center md:text-2xl md:h-[100%]   hover:text-white hover:border-lightBlue">
                Settings
              </figcaption>
            </figure>
            <div className="bg-textOrange flex md:absolute md:bottom-10 py-1 px-4 text-darkBlue md:pr-8 rounded-md cursor-pointer">
              <figure className="flex gap-3 items-center justify-center">
                <IoLogOut className="text-gray-900" />
                <button> Logout </button>
              </figure>
            </div>
          </div>
        )}
      </div>
      <div className="lg:ml-[20%] bg-darkBlue flex flex-col  lg:gap-5 items-start justify-start  lg:w-[80%] lg:px-4 ">
        <div className="welcome-uloma  md:px-10 md:gap-10 box-border px-6 flex items-center justify-between bg-darkBlue lg:py-3 w-full lg:fixed lg:top-0">
          <div className="intro flex flex-col flex-1">
            <h1 className="text-textOrange md:text-2xl lg:text-lg">
              Welcome, Uloma
            </h1>
            <h3 className="text-xs md:text-lg lg:text-xs">Wed. 07 Nov, 2023</h3>
          </div>
          <div className="flex flex-2 items-center lg:fixed lg:right-3 gap-4 ">
            <figure className="p-2 bg-textGray text-darkBlue rounded-md">
              {" "}
              <BsBell />{" "}
            </figure>
            <figure className="p-2 bg-textGray text-darkBlue rounded-md">
              {" "}
              <BsFillBellFill />
            </figure>
          </div>
        </div>
        <div className="flex bg-darkBlue flex-col lg:flex-row mt-10 lg:mt-0 gap-10 lg:gap-1 w-full box-border ">
          <div className=" filter w-full md:px-10  mt-[9rem]  box-border flex flex-col items-start gap-2 justify-start px-6 lg:w-[25%]  lg:min-h-[100vh] md:p-3 lg:fixed lg:top-10">
            <h1 className="text-sm md:text-2xl lg:text-sm"> Filter</h1>
            <div className="flex flex-col gap-3 w-full">
              <h1 className="text-sm md:text-2xl lg:text-lg text-textOrange">
                Location
              </h1>
              <form
                id="form1"
                action=""
                className="flex items-center justify-between md:h-[50px] lg:h-[30px] w-full bg-textGray p-2 rounded-md text-darkBlue"
              >
                <MdOutlineLocationOn className="md:h-[100%] md:w-[20%] " />
                <IoIosArrowDown className="md:h-[100%] md:w-[20%] " />
              </form>
              <div className="typeOfPlace flex w-full flex-col gap-2 ">
                <h1 className="text-sm md:text-2xl lg:text-sm text-textOrange">
                  Type of place
                </h1>
                <div className="flex items-center gap-5">
                  <form className="check" id="check1" action="">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-sm md:text-xl lg:text-sm ml-2">
                      All
                    </label>
                  </form>
                  <form className="check" id="check2" action="">
                    <input
                      type="checkbox"
                      className="accent-textOrange ml-20"
                    />
                    <label className="text-sm md:text-xl lg:text-sm ml-2">
                      Office
                    </label>
                  </form>
                </div>
                <div className="flex items-center gap-4">
                  <form className="check" id="check3" action="">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-sm md:text-xl lg:text-sm ml-2">
                      Building
                    </label>
                  </form>
                  <form className="check" id="check4" action="">
                    <input
                      type="checkbox"
                      className="accent-textOrange ml-12"
                    />
                    <label className="text-sm md:text-xl lg:text-sm ml-2">
                      Shop
                    </label>
                  </form>
                </div>
                <div className="flex items-center  gap-5">
                  <form id="check5" action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label
                      id="appartment"
                      className="text-sm md:text-xl lg:text-sm"
                    >
                      Appartment
                    </label>
                  </form>
                  <form id="check6" action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-sm md:text-xl lg:text-sm">
                      House
                    </label>
                  </form>
                </div>
              </div>
              <div
                id="priceRange"
                className="flex flex-col items-start justify-center gap-1 lg:text-sm"
              >
                <h1 className="text-xs md:text-2xl lg:text-sm text-textOrange">
                  Price Range Per Annum in Naira
                </h1>
                <select
                  name=""
                  id=""
                  className=" box-border p-1 flex items-center justify-between text-darkBlue bg-textGray border-none outline-none rounded-md"
                >
                  <option>Price Range</option>
                  <option value="">280,000</option>
                  <option value=""> 480,000</option>
                  <option value="">1,000,000</option>
                </select>
              </div>
              <div className="features flex flex-col gap-2">
                <h1 className="text-sm md:text-2xl lg:text-sm text-textOrange">
                  Features
                </h1>
                <div className="flex items-center  gap-5">
                  <form name="check7" action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      AC & Heater
                    </label>
                  </form>
                  <form name="check8" action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      Clubhouse
                    </label>
                  </form>
                </div>
                <div className="flex items-center  gap-4">
                  <form name="check9" action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      Dishwasher
                    </label>
                  </form>
                  <form name="check10" action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">Spa</label>
                  </form>
                </div>
                <div className="flex items-center  gap-5">
                  <form action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      Balcony
                    </label>
                  </form>
                  <form action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      Pool
                    </label>
                  </form>
                </div>
                <div className="flex items-center  gap-5">
                  <form action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      Fitness Cntr
                    </label>
                  </form>
                  <form action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      Valet Packing
                    </label>
                  </form>
                </div>
              </div>
              <div className="style flex flex-col gap-2">
                <h1 className="text-sm md:text-2xl lg:text-sm text-textOrange">
                  Style
                </h1>
                <div className="flex items-center  gap-5">
                  <form action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      A Frame
                    </label>
                  </form>
                  <form action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      Dome
                    </label>
                  </form>
                </div>
                <div className="flex items-center  gap-4">
                  <form action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      Cottage
                    </label>
                  </form>
                  <form action="" className="flex flex-1 gap-2">
                    <input type="checkbox" className="accent-textOrange" />
                    <label className="text-xs md:text-xl lg:text-sm">
                      Spanish
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full px-6 lg:w-[75%] lg:ml-[35%] lg:pt-16 flex flex-col box-border gap-2">
            <h1 className="text-textOrange text-md md:text-3xl lg:text-xl pl-5 flex items-center justify-center gap-1 md:gap-3">
              {" "}
              398 Results{" "}
              <span className="text-xs md:text-xl lg:text-sm">
                in Abia State
              </span>
            </h1>
            <div className="mx-auto w-full flex flex-wrap items-center justify-center gap-5 md:gap-7 lg:gap-2 pt-1">
              <div className="mx-auto w-full md:w-[47.5%] lg:w-[32%] h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Palace}
                    alt="Palacial home"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2  bg-white rounded-b-lg flex gap-5 md:gap-1 items-start justify-center">
                  <div className="h-[100%] w-full  flex gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Modern House
                    </h1>
                    <figure className="flex items-center justify-between gap-1 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Home}
                    alt="Residential Home"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2  bg-white rounded-b-lg flex gap-5 items-center justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Duplex
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[30px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Family}
                    alt="Abia tower"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 md:gap-1 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Duplex
                    </h1>
                    <figure className="flex items-center justify-between gap-1 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[30px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={House}
                    alt="Abia tower"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      5 Blocks of Flat
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Azikiwe, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full  md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={FamHouse}
                    alt="Abia tower"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Family House
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #500,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={ModernHouse}
                    alt="Modern House"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] px-4 lg:px-2 bg-white  w-full rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Modern House
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Furniture}
                    alt="Home Interior"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Modern House
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Estate}
                    alt="Estate"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Duplex
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Hostels}
                    alt="Hostels"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hostels
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Estates1}
                    alt="Estates"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Block of Flats
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #50,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Sunny}
                    alt="Abia tower"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Block of Flats
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #40,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={FamilyLodge}
                    alt="Family Lodge"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Short Let
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #50,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Selfcon}
                    alt="Family Lodge"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Self Contain
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #50,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Church}
                    alt="church"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Church Building
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #50,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={DoubleStorey}
                    alt="Family Lodge"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Short Let
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #50,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Woodhouse}
                    alt="Hostels"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hostels
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Mobilehome}
                    alt="Hostels"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hostels
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Mansion}
                    alt="Hostels"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hostels
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={School}
                    alt="Hostels"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hostels
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={School1}
                    alt="Hostels"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      School
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Hotel}
                    alt="Hotel"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hostels
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={School2}
                    alt="SCHOOL"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hostels
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Hotel2}
                    alt="Hostels"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hostels
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-center rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Hotel3}
                    alt="Hotels"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hostels
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Umungasi, Aba
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #100,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={School3}
                    alt="school"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Modern House
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Hotel4}
                    alt="Palacial home"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hotel
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={School4}
                    alt="school"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      School
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={School5}
                    alt="school"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      School
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={School6}
                    alt="school"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-sm md:text-xl lg:text-sm text-textOrange">
                      School
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Hotel5}
                    alt="Palacial home"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hotel
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Hotel6}
                    alt="Palacial home"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Hotel
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Ballroom1}
                    alt="Conference Hall"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Conference Hall
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Conference5}
                    alt="Conference Hall"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Conference Hall
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Conference4}
                    alt="Conference Hall"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Conference Hall
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Conference3}
                    alt="Conference Hall"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Conference Hall
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Conference2}
                    alt="Conference Hall"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Conference Hall
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Eventcenter}
                    alt="Conference Hall"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Conference Hall
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%] h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Conference1}
                    alt="Conference Hall"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Conference Hall
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
              <div className="mx-auto w-full md:w-[47.5%]  lg:w-[32%]  h-[50vh] flex flex-col items-center justify-between rounded-lg">
                <figure className="h-[60%] w-full rounded-t-lg">
                  {" "}
                  <img
                    src={Conference}
                    alt="Conference Hall"
                    className="h-[100%] w-full rounded-t-lg"
                  />
                </figure>
                <div className="h-[40%] w-full px-4 lg:px-2 bg-white rounded-b-lg flex gap-5 items-start justify-center">
                  <div className="h-[100%] w-full flex gap-1 lg:gap-0 items-start justify-center flex-col">
                    <h1 className="text-xs md:text-xl lg:text-sm text-textOrange">
                      Conference Hall
                    </h1>
                    <figure className="flex items-center justify-between gap-3 text-darkBlue">
                      <SlLocationPin />
                      <figcaption className="text-xs md:text-xl lg:text-sm text-darkBlue">
                        {" "}
                        Abia Tower
                      </figcaption>
                    </figure>
                    <h1 className="text-xs md:text-xl lg:text-sm text-darkBlue ">
                      #30,000,00/month
                    </h1>
                  </div>
                  <figure className="h-[40px] w-[55px] md:h-[30px] md:w-[45px]  place-self-center flex items-center justify-center  rounded-full border border-darkBlue">
                    {" "}
                    <GiHearts className="text-red-700 text-sm md:text-md" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
