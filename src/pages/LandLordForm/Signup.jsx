import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/uloma white.png";

const Signup = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative bg-lightBlue"
      style={{ backgroundImage: 'url("../../images/house.jpg")' }}
    >
      <NavLink to="/" className="w-[10%] absolute top-4 left-8">
        <img src={Logo} alt="" />
      </NavLink>
      <div className="bg-darkBlue p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-white text-sm  mb-2"
              htmlFor="fullName"
            >
              Full Name:
            </label>
            <input
              className="w-full border bg-white border-gray-300 p-2 rounded-md"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm  mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full bg-white border border-gray-300 p-2 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your emaill"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm  mb-2" htmlFor="email">
              Password:
            </label>
            <input
              className="w-full bg-white border border-gray-300 p-2 rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm  mb-2">Phone:</label>
            <input
              className="w-full bg-white border border-gray-300 p-2 rounded-md"
              type="tel"
              name="telephone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm  mb-2">Address:</label>
            <input
              className="w-full bg-white border border-gray-300 p-2 rounded-md"
              type="tel"
              name="address"
              placeholder="Enter your address"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <div className="flex items-center py-2">
          <p className="text-[14px]">Already have an Account?</p>
          <NavLink to="/login" className="text-white mx-1">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
