import { Link } from "react-router-dom";
import Logo from "../assets/truwixLogo.svg";

const Navbar = () => {
  return (
    <>
      <div className="w-[90%] relative mx-auto flex flex-col bg-gradient-to-b from-[#0e0811] to-[#1e213d] rounded-2xl">
        <div className="w-full h-auto flex justify-between items-center p-2 rounded-2xl xl:px-8 relative z-50">
          <Link to="/">
          <img src={Logo} alt="Truwix Logo" className="w-36" />
          </Link>
          <div className="hidden md:flex w-auto h-auto gap-6 xl:gap-8 text-white xl:text-lg">
            <span>Home</span>
            <span>Why</span>
            <span>Solutions</span>
            <span>Case Studies</span>
          </div>
          <Link to="/contact">
          <button className="px-5 py-1.5 bg-[#010916] cursor-pointer border font-semibold border-[#E1BBFB] rounded-3xl text-white xl:px-8 xl:text-lg">
            Contact Us
          </button>
          </Link>
        </div>
        <div className="h-5 bg-gradient-to-r from-[#124fff] via-[#fdfefe] to-[#2e85ff] rounded-b-full absolute w-full -bottom-1 -z-10"></div>
      </div>
    </>
  );
};

export default Navbar;
