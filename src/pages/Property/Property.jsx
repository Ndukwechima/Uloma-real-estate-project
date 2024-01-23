import Logo from "../../assets/images/uloma white.png";

const Property = () => {
  return (
    <section className="w-[100%] bg-darkBlue">
      <div className="py-10 px-10 fixed">
        <img src={Logo} alt="logo" width={100} />
      </div>
      <div className=" w-[100%] flex justify-center items-center">
        <div className="w-[60%] border bg-white py-10">
          <div className="py-4 px-4">
            <h1 className="text-black font-bold text-2xl  text-center">
              Property Information
            </h1>
            <h4 className="text-black mt-6 text-center ">Property Location</h4>
          </div>

          <div className="w-60% flex justify-center items-center">
            <form className="w-[55%]">
              <label className="text-black">Address</label>
              <input
                type="text"
                className=" w-[20vw] h-8 ml-5 mt-5 bg-transparent border border-black rounded-md "
              />
              <br />
              <label className="text-black">City</label>
              <input
                type="text"
                className=" w-[20vw] h-8  ml-[3.3em] mt-5 bg-transparent border border-black rounded-md "
              />
              <br />
              <label className="text-black">State</label>
              <input
                type="text"
                className=" w-[20vw] h-8  ml-[2.7em] mt-5 bg-transparent border border-black rounded-md "
              />
              <section>
                {/* Property description */}
                <div className="text-black mt-8 text-center">
                  Property Description
                </div>
              </section>
              <label className="text-[12px] text-black flex justify-center items-center mt-3">
                Describe the amenities, uniqueness and features of the property
              </label>
              <input
                type="text"
                className=" w-[20vw] h-8 ml-[5em] mt-2 bg-transparent border border-black rounded-md "
              />
              <label className="text-[12px] text-black flex justify-center items-center mt-3">
                Property Type
              </label>
              <input
                type="text"
                className=" w-[20vw] h-8 ml-[5em] mt-2 bg-transparent border border-black rounded-md "
              />
              <label className="text-[12px] text-black flex justify-center items-center mt-3">
                Rent Price per Month
              </label>
              <input
                type="text"
                className=" w-[20vw] h-8 ml-[5em] mt-2 bg-transparent border border-black rounded-md "
              />
              <label className="text-[12px] text-black flex justify-center items-center mt-3">
                Number of Bedrooms
              </label>
              <input
                type="text"
                className=" w-[20vw] h-8 ml-[5em] mt-2 bg-transparent border border-black rounded-md "
              />
              <label className="text-[12px] text-black flex justify-center items-center mt-3">
                Number of Bathrooms
              </label>
              <input
                type="text"
                className=" w-[20vw] h-8 ml-[5em] mt-2 bg-transparent border border-black rounded-md "
              />
              <label className="text-[12px] text-black flex justify-center items-center mt-3">
                Upload Property Photos here (5MB Max)
              </label>
              <input
                type="text"
                className=" w-[20vw] h-8 ml-[5em] mt-2 bg-transparent border border-black rounded-md "
              />
              <div className="flex space-x-3 mt-3 ml-5">
                <p className="text-black ml-4">Is pets allow?</p>
                <div>
                  <label className="text-black">Yes</label>
                  <input type="checkbox" className="ml-2" />
                  <label className="text-black">No</label>
                  <input type="checkbox" className="ml-2" />
                </div>
              </div>
              <label className="text-black flex justify-center items-center mt-8">
                Additional Comments or Instruction
              </label>
              <input
                type="text"
                className=" w-[20vw] h-8 ml-[5em] mt-2 bg-transparent border border-black rounded-md "
              />
              <div className="flex space-x-3 ml-8">
                <p className="text-[10px] mt-8 text-black">
                  Terms and Conditions Agreement
                </p>
                <label className="text-[10px] mt-8 text-black">
                  I agree to the platform's terms and conditions
                </label>
                <input type="checkbox" className="ml-2 mt-8" />
              </div>
              <div className="flex justify-center items-center mt-4">
                <button className="w-24 py-1 bg-textOrange text-white font-semibold rounded-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
