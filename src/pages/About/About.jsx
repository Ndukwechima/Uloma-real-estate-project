import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Available from "../../components/Available/Available";
import { NavLink } from "react-router-dom";


const About = () => {
  return (
    <>
      <Header />
      <div className="bg-lightBlue mx-auto  px-10 lg:px-20 pt-10 flex items-start justify-start flex-col">
        {/* <Uloma /> */}
        <div className="mx-auto min-h-[100vh] lg:min-h-[74vh] w-[] flex gap-5 flex-col  lg:flex-row px- lg:px items-center justify-between ">
          <div className=" h-[50vh] md:h-[60vh] w-[100%] flex flex-col items-start justify-center gap-3 md:gap-10 px-10 bg-darkBlue rounded-3xl md:flex-1 shadow-lg">
            <h1 className=" text-xl font-bold "> Welcome to Uloma. Where real estate management meets <span className="text-textOrange">excellence.</span></h1>
            <p className="lg:text-sm text-justify">At Uloma Estate Ltd, our mission is to provive comprehensive property management solutions that empower landlords and businesses to manage their properties and tenants. We are committed to delivering personalized services that prioritize the needs of our clients.</p>
            <button className="btn bg-textOrange text-white border-none outline-none shadow-lg"> Create Account</button>
          </div>
          <div className=" picture h-[50vh] sony-sixteen w-full flex-1  md:h-[60vh] lg:[70vh] md:w-full border-2 border-solid border-textOrange shadow-lg rounded-3xl"></div>
        </div>
        <Available className="flex self-end place-self-end" />

        <div className=" mx-auto p-10  bg-lightBlue flex flex-col gap-5 items-start justify-start lg:gap-10 ">
          <div className="mx-auto flex flex-col lg:w-[100%] items-start justify-center lg:justify-start self-start  box-border">
            <h1 className="font-bold text-2xl ">Mission & <span className=" text-textOrange"> Vision</span></h1>
            <p className="lg:w-[50%] text-xl text-justify">We envision being a leading force in the industry, driven by innovation,integrity and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to the satisfaction and community development</p>
          </div>
          <div className="mx-auto lg:min-h-[50vh] lg:px-20 flex flex-col gap-10 lg:flex-row flex-1 w-full">
            <div className=" picture mission h-[60vh] lg:flex-1 flex items-center justify-center lg:h-[50vh] w-full border-2 border-solid border-textOrange shadow-lg rounded-3xl"></div>
            <div className="flex flex-col flex-1 items-start justify-center">
              <h1 className="text-textOrange font-bold text-2xl">Mission</h1>
              <p className="text-xl text-justify">We envision being a leading force in the industry, driven by innovation,integrity and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to the satisfaction and community development</p>
            </div>
          </div>
          <div className="flex gap-10 flex-col lg:flex-row items-center justify-center lg:px-20">
            <div className="flex flex-col flex-1 items-start justify-center">
              <h1 className="text-textOrange font-bold text-2xl">Vision</h1>
              <p className="text-xl text-justify">Our vision in Uloma is to redefing property management by creating a seamless and personalized experience for Landlords and tenants alike. We envision a future where property management is assessible, transparent and tailored to individual preferences. <br /> <br /> Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric property management. Our vision is to be the prefered property agency known for unwavering committment to excellence, trust and customer satisfaction.</p>
            </div>
            <div className=" picture vision h-[60vh] lg:flex-1 flex items-center justify-center lg:h-[50vh] w-full border-2 border-solid border-textOrange shadow-lg rounded-3xl"></div>
          </div>
        </div>
        <div className="mx-auto h-[170vh] px-10 lg:mt-20 lg:px-20 property-management w-full flex-col md:flex-row gap-10 lg:gap-2 items-start justify-start lg:flex-row">
          <div className="mx-auto flex bg-darkBlue h-[80vh] w-full flex-col items-center justify-start p-10 lg:w-full gap-10 lg:gap-1 rounded-tl-3xl rounded-br-3xl shadow-lg border-4 border-solid border-textOrange">
            <h1 className="text-textOrange text-3xl font">PROPERTY MANAGEMENT</h1>
            <p className="text-justify text-md lg:text-xl">Our automated systems help you as a landlord to manage your property in such a way that you are provided details of all information concerning your tenants. <br /> <br /> These details include: name, address, floor, exact position of their rented appartments, the rent tenure, renewal date with expiry date too. Our systems send out reminders to your tenants and also to you the property owner to be aware of the rent due date and expiry date too. <br /> <br /> Our systems will ask tenants if they are widlling to renew the rent so as to enable you to offer the property to other interested tenants. The system will also list the space for the time the current tenant will be out of the property so that other intending tenants can apply ahead of time for space reservation with a minimal fee. .</p>
          </div>
          <div className=" picture management mt-10 w-full lg:w-full h-[80vh] rounded-3xl border-4 border-solid border-textOrange shadow-lg"></div>
        </div>
        <NavLink to={"/"} className="self-center my-10">
          <button className="btn bg-textOrange border-none outline-none text-white"> Return to Home Page</button>
        </NavLink>
      </div>
      <Footer />
    </>
  )
};

export default About;
