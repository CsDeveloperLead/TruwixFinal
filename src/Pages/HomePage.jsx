import NavBar from "../Components/Navbar.jsx";
import hero from "../assets/hero.jpg";

const HomePage = () => {
  return (
    <div
      className="w-full h-screen "
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ><div className="pt-6 relative z-50">
        <NavBar />
    </div>
      
      <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#E1BBFB]">
          Where Creativity
          <br />
          Meets Purpose
        </h1>{" "}
        <p className="text-white text-sm">
          Creative design to build a brand <br />
          that’s strong, impactful, and full of meaning.
        </p>
        <div className="flex gap-10">
            <button className="w-[150px] md:w-[200px] py-3 bg-white text-black rounded-xl cursor-pointer">See Our Work</button>
            <button className="w-[150px] md:w-[200px] py-3 bg-black text-white rounded-xl cursor-pointer">Get A Quote</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
