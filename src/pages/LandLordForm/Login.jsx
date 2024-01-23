
import Logo from "../../assets/images/uloma white.png";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative bg-lightBlue"
      style={{ backgroundImage: 'url("../../images/house.jpg")' }}
    >
      <div className="w-[10%] absolute top-4 left-8">
        <img src={Logo} alt="" />
      </div>
      <div className="bg-darkBlue p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <p className="py-2">User Account</p>
        <form>
          <div className="py-2">
            <input
              className="w-full border bg-white border-gray-300 p-4 rounded-md"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full bg-white border border-gray-300 p-4 rounded-md mt-4 "
              type="password"
              placeholder="Confirm password"
            />
          </div>
          <div className="mb-4">
            <p className="text-[12px] text-white">Forgot password?</p>
            <h5>Terms and Conditions:</h5>
          </div>
          <div className="flex ">
            <input type="checkbox" />
            <p className="text-[10px] py-1 ml-1">
              I agree to the Terms of Service and Privacy Policy.
            </p>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
