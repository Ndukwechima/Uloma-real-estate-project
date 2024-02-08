import { FaPhoneVolume, FaFacebook, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-darkBlue lg:mt-[8rem] md:mt-[4rem] ">
      <div>
        <div className="text-center py-[10rem]">
          <h1 className="text-2xl text-textOrange font-bold ">Contact Us</h1>
          <p>Any question or remarks, just write us a message!</p>
        </div>
        <div className="w-[100%] flex items-center justify-center">
          <div className="w-[90%] flex  flex-col md:flex-row lg:flex-row space-y-8 justify-around  items-center space-x-4">
            {/* Left side */}
            <div className="bg-lightBlue w-[70%] md:w-[50%] lg:w-[30%] p-10  shadow-md rounded-md">
              <h1 className="2xl text-center font-bold text-white ">
                Contact Information
              </h1>
              <div className="flex justify-center items-center">
                <div className=" pt-10">
                  <div className=" flex space-x-3 mt-5 items-center">
                    <FaPhoneVolume />
                    <p className=" text-white">Phone: +2346508557</p>
                  </div>
                  <div className=" flex space-x-3 mt-5 items-center">
                    <MdEmail />
                    <p className=" text-white">Email: uloma@gmail.com</p>
                  </div>
                  <div className=" flex space-x-3 mt-5 items-center">
                    <IoLocation />
                    <p className=" text-white">10 Aba-Owerri Rd, Aba</p>
                  </div>
                  <div className="flex space-x-4 mt-[5rem] items-center justify-center ">
                    <div className=" bg-textOrange w-8 h-8 rounded-full flex justify-center items-center">
                      <FaFacebook className="text-white" />
                    </div>

                    <div className=" bg-textOrange w-8 h-8 rounded-full flex justify-center items-center">
                      <FaTwitter className="text-white" />
                    </div>

                    <div className=" bg-textOrange w-8 h-8 rounded-full flex justify-center items-center">
                      <FaInstagramSquare className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right side */}
            <section className="flex justify-center items-center bg-white w-[70%] md:w-[50%] lg:w-[40%] py-[5em]  shadow-lg rounded-md">
              <div className="">
                <h1 className="text-center text-2xl text-black ">
                  Send us an Email
                </h1>
                <div className=" flex justify-center items-center mt-5">
                  <form>
                    <input
                      type="text"
                      placeholder="Enter your full Name"
                      className="w-[34vw] md:w-[24vw] lg:w-[20vw] text-[0.8em] bg-white shadow-md pl-2  "
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your Email"
                      className="w-[34vw] md:w-[24vw] lg:w-[20vw] text-[0.8em] mt-5 bg-white shadow-md pl-2"
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your Phone Number"
                      className="w-[34vw] md:w-[24vw] lg:w-[20vw] text-[0.8em] mt-5 bg-white shadow-md pl-2"
                    />
                    <br />
                    <button className=" bg-textOrange text-white rounded-sm font-semibold text-[0.8em] shadow-sm px-4 py-1 mt-4">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Map for location */}
        <section className="w-[100%] flex justify-center items-center">
          <div className="w-[60%] py-24 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0387933036122!2d7.352199174124972!3d5.097430338092376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429bd39c2683db%3A0xb8a19dc41b834ca2!2sAba-Owerri%20Rd%2C%20Aba%2C%20Abia!5e0!3m2!1sen!2sng!4v1705585565730!5m2!1sen!2sng"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
              className="w-[800px] h-[400px]"
            ></iframe>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
