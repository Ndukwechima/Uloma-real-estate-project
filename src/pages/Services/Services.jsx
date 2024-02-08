import { FaPlus } from "react-icons/fa6";
import Servimg from "../../assets/images/house.jpg";
import Backpic from "../../assets/images/WOODhouse.jpg";
import MainTain from "../../assets/images/property maintainance.jpg";
// import Security from "../../assets/images/deposits.jpg";

const Services = () => {
  return (
    <section className=" w-[100%] bg-lightBlue lg:mt-[8rem] md:mt-[4rem] py-10">
      <section className="w-[100%]">
        <div className=" flex flex-col md:flex-row space-y-12  justify-around items-center mt-[10rem] lg:mt-[2rem]">
          <div className="w-[16%] flex justify-center items-center  ">
            {/* Left side */}
            <div className="w-[40vw] md:w-[16vw] lg:w-[20vw] bg-darkBlue flex items-center space-x-2  py-8 px-8 lg:py-4 rounded-md">
              <div className=" flex justify-center items-center">
                <FaPlus className="bg-textOrange text-white  w-6 h-6 rounded-full" />
              </div>
              <div>
                <p className="text-white text-[0.8em] w-[40vw]">Uloma Real</p>
                <p className="text-white text-[0.8em]">Estate LTD</p>
              </div>
            </div>
          </div>
          {/* Righ side */}
          <div className="">
            <h1 className="font-bold text-3xl text-white ">Our Services</h1>
          </div>
        </div>
      </section>
      {/* Property Management Section */}
      <section className="w-[100%] bg-lightBlue mt-[10rem]">
        <section className="w-[100%] flex justify-center items-center">
          <section className="w-[80%] flex flex-col-reverse md:flex-row  gap-4 justify-around items-center ">
            {/* Left side */}

            <div className=" bg-darkBlue rounded-md shadow-lg border border-textOrange py-8 px-8 w-[80vw] md:w-[40%] lg:w-[40%]">
              <div className=" flex justify-between items-center py-2 px-2">
                <h1 className="font-semibold text-white">
                  Property Management
                </h1>
                <div className=" bg-textOrange text-white  w-6 h-6 rounded-full flex justify-center items-center">
                  <FaPlus />
                </div>
              </div>
              <div className="mt-4">
                <p className=" text-textGray text-[14px]">
                  If you are seeking a hassle-free management of your property,
                  then we have you covered and the services we render include
                  property maintenance, Rent Expiry Alert and Notification,
                  tenant communication.
                </p>
                <p className="text-textGray text-[14px]">
                  We have expertise in market analysis, legal compliance, and
                  tenant relations which allows property owners to delegate the
                  day-to-day tasks of property management to us leading to
                  increased property value and minimized stress for property
                  investors.
                </p>
              </div>
              <button className="px-8  bg-textOrange text-white flex items-center justify-center rounded-full py-1 mt-8 ">
                Signup
              </button>
            </div>

            {/* Right side */}
            <div className=" w-[80vw] md:w-[55vw] lg:w-[37vw]">
              <img
                src={Servimg}
                className="rounded-md shadow-2xl"
                alt="House"
              />
            </div>
          </section>
        </section>
      </section>

      {/* Background picture section */}

      <section className=" bg-lightBlue mt-[16rem] md:mt-[12rem] lg:mt-[13rem] ">
        <section className="relative">
          <div className="w-[100%] flex justify-center items-center mt-10">
            <div className="w-[80%]  bg-darkBlue border rounded-md shadow-2xl py-8 px-8  absolute ">
              <div className=" flex justify-between items-center py-2 px-2">
                <h1 className="font-semibold text-white">Tenants Screening</h1>
                <div className=" bg-textOrange text-white  w-6 h-6 rounded-full flex justify-center items-center">
                  <h1>1</h1>
                </div>
              </div>
              <div className="mt-4">
                <p className=" text-textGray text-[14px]">
                  We offer comprehensive evaluation of prospective tenants
                  backgrounds, financial history, and rental histories to
                  minimize risks and protect property investments. other things
                  we do include credit checks, criminal background checks,
                  eviction history checks, and income verification. By utilizing
                  these services, property owners can make informed decisions
                  and improve the overall quality of their tenant pool,
                  ultimately leading to smoother and more profitable rental
                  experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Backpic}
              className=" w-[74vw] h-[60vh] lg:w-[74vw] lg:h-[80vh] rounded-md"
              alt="Backround-pic"
            />
          </div>
        </section>
      </section>

      {/* Request and Consultation section */}

      <section className=" mt-[5rem]">
        <section>
          <div>
            <div className="flex justify-center items-center">
              {/* Up section */}
              <div>
                <div className="w-[100%] flex justify-center items-center">
                  <div className=" w-[40vw] md:w-[30vw] flex justify-center items-center lg:w-[40vw] bg-darkBlue border border-textOrange rounded-md py-4 px-5">
                    <div className="w-[100vw]">
                      <div className=" w-[28vw] flex justify-center items-center bg-blue-700 py-1 rounded-full opacity-90">
                        <p className="text-white text-[1.6vw]  md:text-[1.2vw]  lg:text-[1.2vw]">
                          Request a free consultation now
                        </p>
                      </div>
                      <div className="flex items-center justify-center">
                        <button className=" w-[28vw]  md:w-[18vw]  lg:w-[16vw] mt-4  text-[14px] py-2 text-black rounded-3xl bg-textOrange">
                          Contact Us Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Down section */}
                <div className="flex justify-center items-center mt-[10rem]">
                  <div className="w-[80vw] md:w-[40vw] lg:w-[40vw] bg-darkBlue rounded-md shadow-2xl py-8 px-8  mt-10">
                    <div className="flex justify-center items-center">
                      <div className="w-[78vw] md:w-[36vw] lg:w-[38vw] bg-lightBlue  py-4 px-4 ">
                        <div className=" flex justify-between items-center py-2 px-2">
                          <h1 className="font-semibold text-white">
                            Rent Expiry Alert and Notification Services
                          </h1>
                          <div>
                            <h1 className=" bg-textOrange text-white  w-[30px] h-[30px] rounded-full flex justify-center items-center">
                              2
                            </h1>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="">
                            <p className="text-[1.8vw]">
                              Stay on top of rent due dates effortlessly with
                              our Rent Expiry Alerts:
                            </p>
                            <ul className="mt-4 pl-6">
                              <li>
                                - Automated Reminders: Receive timely alerts for
                                upcoming rent expiration.
                              </li>
                              <li>
                                - Tenant Insights: Access detailed tenant
                                information for better planning.
                              </li>
                              <li>
                                - Prevent Late Payments: Reduce late or missed
                                rent payments.
                              </li>
                              <li>
                                - Improved Relations: Foster positive tenant
                                relationships.
                              </li>
                            </ul>
                            <p className="text-[1.8vw] mt-3">
                              Simplify your property management - Experience
                              hassle-free rent tracking
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className=" bg-lightBlue mt-[10rem]">
        <section className="relative flex justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src={MainTain}
              className=" w-[74vw] h-[80vh] rounded-md"
              alt="Backround-pic"
            />
          </div>
          {/* <div> */}
          <div className="w-[60%] md:w-[50%] lg:w-[40%] bg-darkBlue rounded-md shadow-2xl py-8 px-8  absolute mb-[rem] md:mb-[5rem] lg:mb-[14rem] right-[8rem]">
            <div className=" flex justify-between items-center py-2 px-2">
              <h1 className="font-semibold text-white">Property Maintenance</h1>
              <div className=" bg-textOrange text-white  w-6 h-6 rounded-full flex justify-center items-center">
                <h1>3</h1>
              </div>
            </div>
            <div className="mt-4">
              <div className="">
                <p className="text-[16px]">
                  Effortless property care services which includes:
                </p>
                <ul className="mt-4 pl-6">
                  <li>- Regular inspections and upkeep.</li>
                  <li>-Fast, reliable repairs.</li>
                  <li>- Customized maintenance schedules.</li>
                  <li>- 24/7 emergency support.</li>
                </ul>
                <p className="text-[16px] mt-3">
                  Preserve value, keep tenants happy, and relax with our
                  Property Maintenance servic
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      </section>

      {/* Security section */}
      <section className="mt-[5rem]">
        <section>
          <div>
            <div className="flex justify-around items-center">
              <div className="w-[80vw] md:w-[80vw] lg:w-[40vw] bg-darkBlue rounded-md shadow-2xl py-8 px-8 mt-10">
                <div className="flex">
                  <div className="w-[78vw] md:w-[78vw] lg:w-[38vw] bg-lightBlue py-4 px-4 ">
                    <div className=" flex justify-between items-center py-2 px-2">
                      <h1 className="font-semibold text-white">
                        Security Deposits
                      </h1>
                      <div className=" bg-textOrange text-white  w-6 h-6 rounded-full flex justify-center items-center">
                        <h1>4</h1>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="">
                        <p>Protecting Your Investment.</p>
                        <p className="text-[14px]">
                          Security deposits are your safeguard in the world of
                          property management. They provide a financial cushion
                          for property owners and landlords, ensuring peace of
                          mind
                        </p>
                        <ul className="mt-4 pl-6 text-[12px]">
                          <li>
                            - Tenant Accountability: A security deposit
                            encourages tenants to maintain and respect the
                            property during their stay.
                          </li>
                          <li>
                            - Damage Coverage: It covers any unexpected damages
                            or unpaid rent, securing your investment.
                          </li>
                          <li>
                            - Transparency: We follow legal regulations and best
                            practices to manage and document security deposits
                            diligently.
                          </li>
                          <li>
                            - Improved Relations: Foster positive tenant
                            relationships.
                          </li>
                          <li>
                            Refundable: When the tenancy ends, we assess the
                            propertys condition and promptly refund the deposit
                            when all is in order. Your propertys protection, our
                            priority
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>{/* <img src={Security} alt="Deposite" /> */}</div>
            </div>
          </div>
        </section>
      </section>
      {/* Last Section */}
      <section className="mt-[5rem]">
        <section className="w-[100%] flex justify-center items-center">
          <div className="w-[80%] flex flex-col md:flex-row  space-y-4 justify-between items-center py-8 px-10 ">
            {" "}
            <div>
              <h1 className="text-white hover:text-textOrange cursor-pointer">
                Why Choose Us
              </h1>
            </div>
            <div>
              <h1 className="text-white hover:text-textOrange cursor-pointer">
                Service Process
              </h1>
            </div>
            <div>
              <h1 className="text-white hover:text-textOrange cursor-pointer">
                Contact Information
              </h1>
            </div>
          </div>
        </section>
      </section>
      <div className="w-[100%] flex justify-center items-center">
        <div className=" w-[40vw] md:w-[30vw] flex justify-center items-center lg:w-[40vw] bg-darkBlue border border-textOrange rounded-md py-4 px-5">
          <div className="w-[100vw]">
            <div className=" w-[28vw] ml-3 md:ml-1 lg:ml-16 flex justify-center items-center bg-blue-700 py-1 rounded-full opacity-90">
              <p className="text-white text-[1.6vw]  md:text-[1.2vw]  lg:text-[1.2vw]">
                Request a free consultation now
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button className=" w-[28vw]  md:w-[18vw]  lg:w-[16vw] mt-4  text-[14px] py-2 text-black rounded-3xl bg-textOrange">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
