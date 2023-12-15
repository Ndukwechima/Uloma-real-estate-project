import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Blog/Blog.css";
import Furniture from "../../assets/images/furniture.jpg";
import Poster from "../../assets/images/poster.jpg";
import Mother from "../../assets/images/mother.jpg";
import Base from "../../assets/images/base.png";
import Net from "../../assets/images/net.png";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <NavLink to="/blog">
      <section className="bg-lightBlue w-[100%]">
        <div className="w-[100%] flex justify-center items-center">
          <div className="blog-bg-img w-[80%] h-[30vw]">
            <div>
              <div className="w-[100%] h-[30vw] bg-black opacity-80 mt-[-4rem] rounded-[30px]">
                <h4 className=" text-center font-bold text-white mt-[1em] text-[4rem]">
                  Our Managers
                </h4>
              </div>
            </div>
          </div>
        </div>
        <section className="w-[100%] bg-lightBlue h-[40vh] ">
          <div className=" flex items-center justify-center absolute -mt-[6em] left-[6em]">
            <div className="flex w-[75vw] place-content-center ml-[5rem] ">
              <div className=" w-max-[100%] absolute right-[36em]">
                <img
                  src={Furniture}
                  alt="furniture"
                  className="w-[30vw] border-2 border-textOrange h-[40vh] rounded-[20px] object-fits"
                />
              </div>
              <div className="w-[33vw] px-10 py-8 bg-darkBlue rounded-tr-lg ml-[30em] rounded-br-lg">
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
                  <div className="flex justify-between items-center w-[20vw] py-4">
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
          <div className="w-[90vw] my-0 mx-auto">
            {/* LEFT */}
            <div className="w-[90vw ] px-16">
              <div className="w-[40%] py-4">
                <p className="text-textOrange text-2xl py-2">
                  Popular Articles
                </p>
                <p className="text-textGray text-[1em]">
                  We share common trends, strategies ideas, opinions, short &
                  long stories from the team behind company.
                </p>
              </div>
              <article className="w-[81vw]  flex justify-between items-center">
                <div className=" relative">
                  <p className="text-white text-[1.5em] font-bold absolute w-[30vw] mt-[2em] px-8">
                    Searching for affordable housing with great house
                    maintenance service.
                  </p>

                  <img
                    src={Mother}
                    alt="mother"
                    className=" h-auto w-[35vw] rounded-lg border-2 border-textOrange"
                  />
                  <div className="w-[35vw] bg-black opacity-90 absolute bottom-[1px]  rounded-bl-lg rounded-br-lg h-12">
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
                {/* RIGHT */}
                <div className="w-max-[100%] relative">
                  <p className="text-white text-[1.5em] font-bold absolute w-[30vw] mt-[2em] px-8">
                    Every mother wants the best accommodation for her toddlers
                    comfort,
                  </p>

                  <img
                    src={Mother}
                    alt="mother"
                    className=" h-auto w-[35vw] rounded-lg border-2 border-textOrange"
                  />
                  <div className="w-[35vw] bg-black opacity-90 absolute bottom-[1px] rounded-bl-lg rounded-br-lg h-12">
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
              </article>
            </div>
          </div>
        </section>
        {/* FUTURE  */}
        <section className="bg-lightBlue w-[100%] py-[10em]">
          <div className="w-[90%] mt-0 mx-auto ">
            <div className="w-[90%] flex justify-between items-center ml-14">
              <div className="py-10">
                <p className="text-textOrange text-3xl">Recent Articles</p>
                <p className="text-textGray">
                  Here's what we're been up to recently
                </p>
              </div>
              <button className="text-white flex items-center ">
                view all <FaArrowRight className="ml-2" />
              </button>
            </div>
            <div className=" w-[90%] flex justify-between ml-[4em] ">
              <div className=" w-max-[100%] py-4 relative">
                <img
                  src={Net}
                  alt="innovation"
                  className="w-[24vw] border-2 border-textOrange h-[50vh] rounded-[20px] object-fits"
                />
                <div className="w-[19vw] absolute bottom-[5em] h-[20vh] px-8">
                  <h4 className="text-white text-2xl font-bold">
                    Future of work
                  </h4>
                  <p className="text-white">
                    Majority of peole will work in jobs that do not exist today.
                  </p>

                  <div className="flex justify-between w-[15vw] my-[3em] ">
                    <div className="flex space-x-2 ">
                      <img
                        src={Poster}
                        alt="poster"
                        className="w-[1em] h-[1em] rounded-full "
                      />
                      <p className="text-white text-[12px] tracking-widest">
                        Simple
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-[10px]">10 Nov</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-max-[100%] py-4 relative">
                <img
                  src={Net}
                  alt="innovation"
                  className="w-[24vw] border-2 border-textOrange h-[50vh] rounded-[20px] object-fits"
                />
                <div className="w-[19vw] absolute bottom-[5em] h-[20vh] px-8">
                  <h4 className="text-white text-2xl font-bold">
                    Future of work
                  </h4>
                  <p className="text-white">
                    Majority of peole will work in jobs that do not exist today.
                  </p>
                  <div className="flex justify-between w-[15vw] my-[3em]">
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
                      <p className="text-white text-[10px]">10 Nov</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-max-[100%] py-4 relative">
                <img
                  src={Net}
                  alt="innovation"
                  className="w-[24vw] border-2 border-textOrange h-[50vh] rounded-[20px] object-fits"
                />
                <div className="w-[19vw] absolute bottom-[5em] h-[20vh] px-8">
                  <h4 className="text-white text-2xl font-bold">
                    Future of work
                  </h4>
                  <p className="text-white">
                    Majority of peole will work in jobs that do not exist today.
                  </p>
                  <div className="flex justify-between w-[15vw] my-[3em] ">
                    <div className="flex space-x-2 ">
                      <img
                        src={Poster}
                        alt="poster"
                        className="w-[1em] h-[1em] rounded-full "
                      />
                      <p className="text-white text-[12px] tracking-widest">
                        Simple
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-[10px]">10 Nov</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END */}
        <section className="bg-lightBlue w-[100%] flex justify-center items-center py-[2em]">
          <div className="w-[94%]">
            <div className="w-[78%] flex justify-between items-center ml-[12em]">
              <div className=" ">
                <p className="text-textOrange text-3xl">Case Studies</p>
                <p className="text-textGray">
                  Here is what we have been up to recently.
                </p>
              </div>
              <button className="text-white flex items-center ">
                view all <FaArrowRight className="ml-2" />
              </button>
            </div>

            <section className="w-[90%] ">
              <div className="flex w-[75vw] place-content-center py-10 relative  ">
                <div className=" w-max-[100%] absolute ml-[-15em]">
                  <img
                    src={Furniture}
                    alt="furniture"
                    className="w-[35vw] border-2 border-textOrange h-[50vh] rounded-[20px]"
                  />
                </div>
                <div className="w-[35vw] px-10 py-9 ml-[50em] bg-darkBlue rounded-tr-lg rounded-br-lg">
                  <button className="text-textOrange bg-lightBlue py-1 px-4 rounded-full">
                    Uloma
                  </button>
                  <div className=" py-2">
                    <p className="text-2xl text-white">
                      Cheap Airline Tickets Great Ways To Save
                    </p>
                    <p className="text-[.8rem] text-textGray mt-1">
                      In this digital generation where information can be easily
                      obtained within seconds, business cards ...
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center w-[30vw] py-10 mt-6">
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
            </section>
          </div>
        </section>

        <section className="bg-lightBlue flex items-center justify-center py-10">
          <div className="w-[90vw] my-0 mx-auto">
            {/* LEFT */}
            <div className="w-[90vw ] px-16">
              <div className="w-[90vw ] flex justify-between px-16">
                <div className="w-[40%] py-4">
                  <p className="text-textOrange text-2xl py-2">All Articles</p>
                  <p className="text-textGray text-[1em]">
                    We share common trends, strategies ideas, opinions, short &
                    long stories from the team behind company.
                  </p>
                </div>
                <button className="text-white flex items-center ">
                  view all <FaArrowRight className="ml-2" />
                </button>
              </div>
              <article className="w-[81vw]  flex justify-between items-center">
                <div className=" relative">
                  <p className="text-white text-[1.5em] font-bold absolute w-[30vw] mt-[7em] px-8">
                    How to prevent and protect your family from digital hazard
                  </p>

                  <img
                    src={Mother}
                    alt="mother"
                    className=" h-auto w-[35vw] rounded-lg border-2 border-textOrange"
                  />
                  <div className="w-[35vw] bg-black opacity-90 absolute bottom-[1px]  rounded-bl-lg rounded-br-lg h-12">
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
                {/* RIGHT */}
                <div className="w-max-[100%] relative">
                  <p className="text-white text-[1.5em] font-bold absolute w-[30vw] mt-[7em] px-8">
                    Motherhood is the hardest and the best job ever
                  </p>

                  <img
                    src={Mother}
                    alt="mother"
                    className=" h-auto w-[35vw] rounded-lg border-2 border-textOrange"
                  />
                  <div className="w-[35vw] bg-black opacity-90 absolute bottom-[1px] rounded-bl-lg rounded-br-lg h-12">
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
              </article>
            </div>
          </div>
        </section>

        <section className="bg-lightBlue w-[100%] py-6 ">
          <div className="w-[90%] mt-0 mx-auto ">
            <div className=" w-[90%] flex justify-between ml-[4em] ">
              <div className=" w-max-[100%] py-4 relative">
                <img
                  src={Net}
                  alt="innovation"
                  className="w-[24vw] border-2 border-textOrange h-[50vh] rounded-[20px] object-fits"
                />
                <div className="w-[19vw] absolute bottom-[5em] h-[20vh] px-8">
                  <h4 className="text-white text-2xl font-bold">
                    Future of work
                  </h4>
                  <p className="text-white">
                    Majority of peole will work in jobs that do not exist today.
                  </p>

                  <div className="flex justify-between w-[15vw] my-[3em] ">
                    <div className="flex space-x-2 ">
                      <img
                        src={Poster}
                        alt="poster"
                        className="w-[1em] h-[1em] rounded-full "
                      />
                      <p className="text-white text-[12px] tracking-widest">
                        Simple
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-[10px]">10 Nov</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-max-[100%] py-4 relative">
                <img
                  src={Net}
                  alt="innovation"
                  className="w-[24vw] border-2 border-textOrange h-[50vh] rounded-[20px] object-fits"
                />
                <div className="w-[19vw] absolute bottom-[5em] h-[20vh] px-8">
                  <h4 className="text-white text-2xl font-bold">
                    Future of work
                  </h4>
                  <p className="text-white">
                    Majority of peole will work in jobs that do not exist today.
                  </p>
                  <div className="flex justify-between w-[15vw] my-[3em]">
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
                      <p className="text-white text-[10px]">10 Nov</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-max-[100%] py-4 relative">
                <img
                  src={Net}
                  alt="innovation"
                  className="w-[24vw] border-2 border-textOrange h-[50vh] rounded-[20px] object-fits"
                />
                <div className="w-[19vw] absolute bottom-[5em] h-[20vh] px-8">
                  <h4 className="text-white text-2xl font-bold">
                    Future of work
                  </h4>
                  <p className="text-white">
                    Majority of peole will work in jobs that do not exist today.
                  </p>
                  <div className="flex justify-between w-[15vw] my-[3em] ">
                    <div className="flex space-x-2 ">
                      <img
                        src={Poster}
                        alt="poster"
                        className="w-[1em] h-[1em] rounded-full "
                      />
                      <p className="text-white text-[12px] tracking-widest">
                        Simple
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-[10px]">10 Nov</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] flex justify-center items-center">
              <button className="text-white flex items-center  border py-1 px-8 rounded-sm">
                view all <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </section>
        <section className="w-[100%] bg-lightBlue flex justify-center items-center py-10">
          <section className="w-[80%] bg-darkBlue flex justify-between items-center">
            <div className="py-16 px-14">
              <h2 className="w-[45%] text-2xl text-white py-2">
                Get our stories delivered From us to your inbox weekly.
              </h2>
              <div>
                <form className="flex">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="py-[.5em] px-[3em] bg-white rounded-md"
                  />
                  <button className="bg-blue-700 py-[.5em] px-[1em] ml-2 rounded-md text-white">
                    Get Started
                  </button>
                </form>
                <p className="w-[49%] text-[.7rem] text-white py-2">
                  Get a response tomorrow if you submit by 9pm today. If we
                  received after 9pm will get a reponse the following day.
                </p>
              </div>
            </div>
            <div className=" w-[30%] flex justify-center items-center">
              <div>
                <div>
                  <img src={Base} width={300} alt="base" />
                </div>
                <div>
                  <p className="text-white text-[1.3rem] py-2">
                    The best aticles every week
                  </p>
                  <p className=" w-inherit text-[1rem] py-1">
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
