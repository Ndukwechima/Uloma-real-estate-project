import { NavLink } from "react-router-dom";
import "../../styles/Blog/Blog.css";
import Poster from "../../assets/images/poster.jpg";
import Mother from "../../assets/images/mother.jpg";

const Blog = () => {
  return (
    <NavLink to="/blog">
      <section className="bg-lightBlue w-[100%] lg:mt-[7rem] md:mt-[4rem]">
        <div className="w-[100%] flex justify-center items-center">
          <div className="blog-bg-img w-[80%] h-[30vw]">
            <div>
              <div className="">
                <h4 className=" text-center font-bold text-white mt-10   text-[2rem] md:text-[3rem] lg:text-[4rem]">
                  Our Managers
                </h4>
              </div>
            </div>
          </div>
        </div>
        <section className=" bg-lightBlue ">
          <div className=" ">
            <div className="flex items-center justify-center py-8  ">
              <div className="w-[80%] px-10 py-8 bg-darkBlue rounded-tr-lg rounded-br-lg">
                <button className="text-textOrange bg-lightBlue py-1 px-4 rounded-full">
                  Uloma
                </button>
                <div className=" py-2">
                  <p className="text-3xl text-white">
                    Great House management service.
                  </p>
                  <p className="text-[.8rem] text-textGray mt-1">
                    In this digital generation where information can be easily
                    obtained within seconds, business cards ...
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center w-[30vw]  py-4">
                    <div className="flex space-x-2 ">
                      <img
                        src={Poster}
                        alt="poster"
                        className="w-[1em] h-[1em] rounded-full border "
                      />
                      <p className="text-white text-[12px] tracking-widest">
                        Simple
                      </p>
                    </div>
                    <div>
                      <p className="text-textGray text-[10px]">10 Nov</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-lightBlue flex items-center justify-center">
          <div className="w-[90vw]  my-0 mx-auto">
            <div className="w-[90vw ] px-16">
              <div className="w-[60vw] md:w-[40vw] lg:w-[30vw] py-4">
                <p className="text-textOrange text-2xl py-2">
                  Popular Articles
                </p>
                <p className="text-textGray text-[1em]">
                  We share common trends, strategies ideas, opinions, short &
                  long stories from the team behind company.
                </p>
              </div>
              <div className="w-[100%] relative">
                <div className="">
                  <p className=" text-white text-[1em] md:text-[1.4em] lg:text-[1.5em] font-bold absolute mt-[2em] px-8">
                    Searching for affordable housing with great house
                    maintenance service.
                  </p>
                </div>

                <img
                  src={Mother}
                  alt="mother"
                  className="  rounded-lg border-2 border-textOrange"
                />
                <div className="w-[40vw] bg-black opacity-90 absolute bottom-[1px]  rounded-bl-lg rounded-br-lg h-12">
                  <div className="flex justify-between items-center w-[34vw] py-4">
                    <div className="flex  space-x-2 ml-2 ">
                      <img
                        src={Poster}
                        alt="poster"
                        className="w-[1em] h-[1em] rounded-full border "
                      />
                      <p className="text-white text-[12px] tracking-widest">
                        Simple
                      </p>
                    </div>
                    <div>
                      <p className="text-textGray text-[10px]">10 Nov</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-[100%] bg-lightBlue flex justify-center items-center py-10">
          <section className="w-[80%] bg-darkBlue flex flex-col md:flex-row space-y-4 justify-between items-center">
            <div className="py-16 px-14">
              <h2 className="w-[84%]  md:w-[50%] lg:w-[45%] text-2xl text-white py-2">
                Get our stories delivered From us to your inbox weekly.
              </h2>
              <div>
                <form className="flex">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-[36vw] md:w-[34vw] lg:w-[20vw] bg-white rounded-md pl-2 py-2"
                  />
                  <button className="w-[20vw] md:w-[14vw] lg:w-[10vw] bg-blue-700  ml-2 rounded-md text-white">
                    Get Started
                  </button>
                </form>
                <p className="w-[80%] md:w-[52%] lg:w-[49%] text-[.7rem] text-white py-2">
                  Get a response tomorrow if you submit by 9pm today. If we
                  received after 9pm will get a reponse the following day.
                </p>
              </div>
            </div>
            <div className=" w-[30%] flex flex-col md:flex-row justify-center items-center">
              <div>
                <div>
                  <p className=" w-[46vw] md:w-[16vw] lg:w-[24vw] text-white text-[1.3rem] py-2">
                    The best aticles every week
                  </p>
                  <p className="w-[46vw] md:w-[16vw] lg:w-[22vw]  text-[1rem] py-2">
                    Our insurance plans offers are priced the same everywhere
                    else.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </NavLink>
  );
};

export default Blog;
