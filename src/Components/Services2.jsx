import React from 'react';
import { MdOutlineSettings } from "react-icons/md";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import icon4 from "../assets/Icon4.png";
import icon5 from "../assets/Icon5.png";
const Services2 = () => {
  const products = [
    {
      name: "Graphic Design",
      image: icon1,
      price: 19.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Electronics",
     
    },
    {
      name: "App Designing",
      image: icon2,
      price: 29.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Electronics",
      
    },
    {
      name: "Brand Awarness",
      image: icon3,
      price: 29.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Electronics",
      rating: 4.5,
    },
    {
        name: "Web Design & Development",
        image: icon4,
        price: 29.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "Electronics",
        rating: 4.5,
      },
      {
        name: "Ads Designing",
        image: icon5,
        price: 29.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "Electronics",
        rating: 4.5,
      },
      {
        name: "Analytics & Reporting",
        image: icon1,
        price: 29.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "Electronics",
        rating: 4.5,
      },
  ];

  return (
    <div className="bg-black w-full h-auto text-white py-6 md:py-10">
      {/* Header Section */}
      <div className="flex w-full justify-center">
        <button className="w-[120px] h-[36px] bg-gray-500 text-[#E1BBFB] cursor-pointer rounded-full ml-1 flex items-center justify-center my-4 gap-2">
          <span>
            <MdOutlineSettings size={20} />
          </span>
          Services
        </button>
      </div>

      {/* Title Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-[68px] mb-5 font-bold  text-center ">
          Your Path to <span className="text-[#E1BBFB]">Digital</span> Excellence
        </h1>
        <p className="text-sm md:text-[18px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud.
        </p>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-20 mt-10   ">
        {products.map((product, index) => (
          <div
            key={index}
            className="h-auto  rounded-3xl border bg-gradient-to-r from-[#060B21] to-[#0E142F] border-[#E1BBFB] p-4 trans-tion-transform duration-200  hover:scale-105 "
          >
           <div className='w-12 h-12 bg-black rounded-full border-1  flex justify-center items-center my-5'>
            <img
              src={product.image}
              alt={product.name}
              className="w-[32px] h-[32px]   text-start flex justify-center items-center"
            />
           </div>
            <h2 className="text-[24px] font-semibold text-white  mb-2">{product.name}</h2>
            <p className="text-[18px`] ">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services2;
