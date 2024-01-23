import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaCheck } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Uloma from "../../components/Uloma/Uloma";
import Available from "..//../components/Available/Available";


const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto items-start justify-center gap-10 lg:gap-4 bg-lightBlue py-5">
        <div className=".text-container self-center flex items-center justify-center">
          <h1 className=" header-one ms-10 my-5 text-3xs p-1  text-center lg:bg-transparent text-textGray md:font-bold md:self-center md:py-4 md:px-10 rounded-3xl shadow-lg lg:shadow-none lg:text-5xl border-none outline-none">  YOUR PROPERTY MANAGERS  </h1>
        </div>
        
        <div className="bg-textOrang flex h-auto  gap-10 flex-col md:flex-row items-center justify-between mx-auto md:h-[50vh] lg:h-[80vh] px-10 lg:px-20 py-5">
          
          <div className="h-[100%] flex-1 items-start justify-center flex flex-col gap-5 ">
            <figure className="py-2 px-5 bg-darkBlue flex justify-start items-center gap-2 rounded-3xl"> 
              <span className="bg-textOrange p-1 rounded-full"><FaCheck className="text-darkBlue" /></span>
              <figcaption className="text-sm">No rigorous process required</figcaption>
            </figure>
            <h1 className=" text-xl font-bold">Welcome to Uloma. Manage Your Properties, <span className="text-textOrange">Screen New Tenants</span></h1>
            <p className="text-sm text-justify"> At Uloma Estates Ltd, our mission is to provide comprehensive property management solutions that empower landlords and businesses to manage their properties and tenants. We are committed to deliveringpersonalized and innovative services that prioritize the needs of our clients. </p>
            <button className="btn w-40 bg-textOrange text-white font-bold border-none outline-none shadow-lg"> Create Account </button>
          </div>
          <div className="h-[100%] w-full flex gap-2 flex-col items-center justify-center md:flex-1 p-0 relative">
            <div>
              <Uloma />
            </div>
            <div className="picture house-1 h-[300px] w-full border-2 border-solid border-textOrange rounded-2xl lg:h-[70%] shadow-lg"> </div>
            <Available />
          </div>
        </div>
        <div className="mx-auto h-auto px-10 lg:px-20  flex gap-5 items-start justify-start flex-col lg:justify-between lg:items-center lg:flex-row lg:h-[100vh] lg:w-[100vw] ">
            <div className="services flex-1 lg:w-[50vw] h-[80%] flex gap-7 flex-col items-center justify-center lg:gap-10 lg:px-5">
              <h1 className="animate text-4xl font-bold"> OUR SERVICES</h1>
              <p className="flex items-center justify-center lg:w-[100%] text-justify">We offer specialized services to landlords and tenants alike and we are here to make the process of managing a property hassle-free and reduce the risk for landlords who may not have all the time to screen and properly verify tenants before giving them their houses in rent</p>
            </div>

            {/* this is the code for the flower pot */}

            <div className=" flower hidden flex-1  lg:flex items-center justify-center w-[50%] h-[80%]">
              <div className="f-wrapper flex items-center justify-center">
                <div className="flower__line"></div>
                <div className="f">
                    <div className="flower__leaf flower__leaf--1"></div>
                    <div className="flower__leaf flower__leaf--2"></div>
                    <div className="flower__leaf flower__leaf--3"></div>
                    <div className="flower__leaf flower__leaf--4"></div>
                    <div className="flower__leaf flower__leaf--5"></div>
                    <div className="flower__leaf flower__leaf--6"></div>
                    <div className="flower__leaf flower__leaf--7"></div>
                    <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
                </div>
              </div>

              <div className="f-wrapper f-wrapper--2">
                  <div className="flower__line"></div>
                  <div className="f">
                      <div className="flower__leaf flower__leaf--1"></div>
                      <div className="flower__leaf flower__leaf--2"></div>
                      <div className="flower__leaf flower__leaf--3"></div>
                      <div className="flower__leaf flower__leaf--4"></div>
                      <div className="flower__leaf flower__leaf--5"></div>
                      <div className="flower__leaf flower__leaf--6"></div>
                      <div className="flower__leaf flower__leaf--7"></div>
                      <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
                  </div>
              </div>
              <div className="f-wrapper f-wrapper--3">
                  <div className="flower__line"></div>
                  <div className="f">
                      <div className="flower__leaf flower__leaf--1"></div>
                      <div className="flower__leaf flower__leaf--2"></div>
                      <div className="flower__leaf flower__leaf--3"></div>
                      <div className="flower__leaf flower__leaf--4"></div>
                      <div className="flower__leaf flower__leaf--5"></div>
                      <div className="flower__leaf flower__leaf--6"></div>
                      <div className="flower__leaf flower__leaf--7"></div>
                      <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
                  </div>
              </div>
              <div className="flower__glass"></div>
            </div>


            {/* this is the end of the code for the flower */}
          
        </div>
        <div className=" mx-auto px-10 lg:px-20  md:py-10 flex flex-col md:flex-row gap-10 lg:gap-10 items-center justify-between w-full">
          <div className="w-full lg:px-10 flex gap-5   md:flex-1 lg:gap-10 flex-col items-center justify-center" >
            <h1 className="text-xl flex items-center justify-center font-bold w-full py-2">Real Estate Management</h1>
            <div className="picture estate w-full h-[50vh] lg:h-[70vh] border-2 border-solid border-textOrange rounded-xl shadow-lg" ></div>
          </div>
          <div className=" w-full lg:px-10 flex gap-5  md:flex-1 lg:gap-10 flex-col items-center justify-center">
            <h1 className="text-xl flex items-center justify-center font-bold w-full py-2">Tenant Screening </h1>
            <div className="picture tenant w-full h-[50vh] lg:h-[70vh] border-2 border-solid border-textOrange rounded-xl shadow-lg" ></div>
          </div>
        </div>
        <div className="mx-auto p-10 lg:px-20  flex flex-col items-center justify-center gap-5 md:gap-10">
          <p>At Uloma Estate Ltd, we cater to the diverse needs of landlords and businesses alike, offering a range of real estate solutions. </p>
          <button className="btn text-white font-bold text-justify bg-textOrange outline-none border-none shadow-lg"> Learn More</button>
        </div>
        <div className="mx-auto p-10 lg:px-20  lg:py-5 flex flex-col md:flex-row gap-10  items-center justify-center">
          <div className="individual flex gap-5 flex-col items-center justify-center md:w-[40%]"> 
            <h1 className="flex items-center justify-center font-bold text-xl text md:text-3xl">For Individuals</h1>
            <p className="flex items-center justify-center text-justify"> For individuals our mortgage services pave the way to home ownership, and our flexible personal loans provide vital support during various life milestones. We also provide retirement planning, ensuring a financially secure future for our customers.</p>
            <button className="btn bg-textOrange outline-none border-none shadow-lg text-white">Learn More</button>
          </div>
          <div className="individual-div flex items-center justify-center w-full h-[50vh] lg:h-[80vh] border-2 border-solid border-textOrange rounded-xl md:w-[60%] shadow-lg"></div>
        </div>
        <div className="mx-auto p-10 lg:px-20  flex flex-col md:flex-row gap-10  items-center justify-center">
          <div className="flex gap-5 flex-col items-center justify-center md:w-[40%]"> 
            <h1 className="flex items-center justify-center font-bold text-xl md:text-3xl">For Businesses</h1>
            <p className="flex items-center justify-center text-justify"> For businesses we empower growth with working capital solutions that optimize cash flow and our tailored financial options fuel business expansion. Whatever your financial aspiration Uloma is committed to providing the right tools and support to achieve them.</p>
            <button className="btn bg-textOrange text-white shadow-lg outline-none border-none">Learn More</button>
          </div>
          <div className="businesses flex items-center justify-center w-full h-[50vh] lg:h-[80vh] border-2 border-solid border-textOrange rounded-xl md:w-[60%] shadow-lg" ></div>
        </div>
        <div className=" mx-auto px-10 py-5 lg:px-20 flex flex-col items-start justify-center gap-5">
          <div>
            <h1 className="text-textOrange font-bold text-lg">Frequently <span className="text-textGray"> Asked Questions </span></h1>
            <h3>Still you have a question? Contact our technical team via support@uloma.com </h3>
          </div>
          <div className="flex gap-3 flex-col items-center justify-between">

          {/* This is the code for the background animation of rotating blocks. */}

          <ul className="circles z-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

          {/*This is the end of the code for the background animation of rotating blocks  */}


            <div className="flex gap-3 flex-col md:flex-row">
              <div className="p-10 flex  border border-solid border-textGray flex-1 gap-5 flex-col items-start justify-center rounded-lg">
                <h1 className="py-3 w-full border-b  border-solid border-textGray">How do I create an account with Uloma as a landlord?</h1>
                <p className="text-justify">Opening an account with Uloma is easy. Simply visit or website and click on the <span>Sign Up</span> button. Follow the prompts, provide the required information and complete the application process. If you have any question or need assistance, our customer support is available to help.  </p>
              </div>
              <div className="p-10 flex border border-solid border-textGray flex-1 gap-5 flex-col items-start justify-center rounded-lg">
                <h1 className="py-3 w-full border-b  border-solid border-textGray">What documents do i need to provide to manage my property?</h1>
                <p className="text-justify">Accessing your account online is simple and secure. Visit our website and click on the  <span>Log In</span>button. Enter your username and password to access your account. If you have not created an account yet, the Log In button will take you to the <span>Sign Up page so that you will complete the sign up process to have your account set up before login in.</span></p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex flex-1 p-10  border border-solid border-textGray  gap-5 flex-col items-start justify-center rounded-lg">
                <h1 className="py-3 w-full border-b  border-solid border-textgRAY">How can I sign into my account?</h1>
                <p className="text-justify">Accessing your account online is simple and secure. Visit our website and click on the  <span>Log In</span>button. Enter your username and password to access your account. If you have not created an account yet, the Log In button will take you to the <span>Sign Up page so that you will complete the sign up process to have your account set up before login in.</span></p>
              </div>
              <div className="flex p-10  border border-solid border-textGray flex-1 gap-5 flex-col items-start justify-center rounded-lg">
                <h1 className="py-3 w-full border-b  border-solid border-textGray">Are my account and personal infornation secure?</h1>
                <p className="text-justify">Accessing your account online is simple and secure. Visit our website and click on the  <span>Log In</span>button. Enter your username and password to access your account. If you have not created an account yet, the Log In button will take you to the <span>Sign Up page so that you will complete the sign up process to have your account set up before login in.</span></p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 self-center px-5 py-1 bg-darkBlue rounded-3xl shadow-lg">Load all FAQs <span> <FaCircleArrowDown /> </span></div>
        </div>
        <div className=" mx-auto h-auto flex gap-5 px-10 py-10 w-[80vw] items-center justify-center flex-col md:flex-row lg:px-20 bg-gray-900 md:h-[30vh] rounded-lg shadow-lg">
          <div className=" mx-10 flex flex-col w-[90%] items-start justify-start gap-5  ">
            <h1 className="text-2xl font-bold">Start Your Property Management With <span className="text-textOrange">Uloma Today?</span></h1>
            <h3 className="text-justify"> Ready to manage your property seamlessly? Sign up now, and let us help you manage your real estate business with our tailored solutions and exceptional customer service.</h3>
          </div>
          <button className="btn flex px-5  items-center justify-center bg-textOrange text-white border-none outline-none shadow-lg"> Sign In </button>
        </div>
        <NavLink to={""} className="flex items-center justify-center w-full"> 
          <button className="btn bg-textOrange place-self-center text-white border-none outline-none shadow-lg">Return to the Top </button>
        </NavLink>
        
      </div>
      <Footer />
    </>
  );
};

export default Home;
