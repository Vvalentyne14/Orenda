import React from "react";
import newsletter from "../../assets/newsletter.png";

const Newsletter = () => {
  return (
    <div className="flex mx-auto items-center justify-center gap-[6rem] mt-10 bg-[#F5F5F5]">
      <div className=" p-8 mt-16 ">
        <h2 className="text-[35px] font-bold text-center mb-16 font-heading">
          Subscribe to our Newsletter
        </h2>
        <form className="space-y-16 ">
          <div className="mb-4">
            
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2  focus:outline-none bg-transparent border-b placeholder:font-medium placeholder:text-[#0F0F0F] pb-4 placeholder:text-[20px] font-dm-sans"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2  focus:outline-none bg-transparent border-b placeholder:font-medium placeholder:text-[#0F0F0F] pb-4 placeholder:text-[20px] font-dm-sans"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2  focus:outline-none bg-transparent border-b placeholder:font-medium placeholder:text-[#0F0F0F] pb-4 placeholder:text-[20px] font-dm-sans"
              placeholder="Email"
              required
            />
          </div>
          <button
            type="submit"
            className=" bg-transparent text-orenda-purple py-2 rounded-[25px] hover:bg-orenda-purple hover:text-white transition duration-300 font-open-sans w-[190px] border border-orenda-purple"
          >
            Subscribe
          </button>
        </form>
      </div>
      <img src={newsletter} alt="" />
    </div>
  );
};

export default Newsletter;
