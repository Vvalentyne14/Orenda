import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./Blogs";
import divarrleft from "../../assets/divarrleft.png";
import divarr from "../../assets/divarr.png";
import "./Blogs.css";
import profile from "../../assets/profile.png";
import x from "../../assets/X.png";
import LinkedIn from "../../assets/LinkedIn.png";
import facebook from "../../assets/Facebook.png";
import Messages from "../../assets/Messages.png";


const Bloginfo = () => {
  const {title} = useParams()
  const blog = blogs.find(blog => blog.title === title)
  
  return (
    <div>
      <div className="max-w-[1215px] mx-auto p-6 bg-white flex flex-col gap-2">
        <h4 className="flex items-center justify-center font-dm-sans text-[#757575]">
          <span>Home / Blog / Understanding Anxiety Disorders</span>
        </h4>
        <h1 className="sm:text-[28px] font-medium text-[#070707] text-center mb-4 font-heading mt-[13px] w-[70%] mx-auto">
          {blog.title}
        </h1>
        <div className="flex items-center justify-center font-dm-sans">
          <button className="px-2 py-1 bg-white text-[#2E0086] rounded-[25px] border text-[14px] j ">
            {blog.category}
          </button>
          <p className="text-bold  text-black flex gap-1 items-center mt-[] mb-[]">
            <img src={divarrleft} alt="" /> {blog.date}{" "}
            <img src={divarr} alt="" />
          </p>
        </div>
        <p className="mb-4 leading-[1.9rem] text-fluid whitespace-pre-line">
          {blog.prologue}
        </p>

{     blog.subTitle1 &&   <h2 className=" font-semibold mb-4 text-[1.2rem] font-heading pt-6 text-center w-[70%] mx-auto">
          {blog.subTitle1}
        </h2>}
{     blog.subText1 &&   <p className="mb-4 leading-[1.9rem] text-fluid whitespace-pre-line">
          {blog.subText1}
        </p>}

{     blog.subTitle2 &&  <h2 className="text-[1.2rem] font-semibold mb-4 text-center md:text-left font-heading pt-6 w-[70%] mx-auto md:w-[100%]">
          {blog.subTitle2}
        </h2>}
        <div className=" justify-between gap-16 lg:flex">
      {  blog.sideImg &&  <img src={blog.sideImg} alt=""  className=" block mx-auto sm:my-4 md:my-5 lg:my-0"/>}
      {  blog.subText2 && <p className="leading-[1.9rem] text-fluid whitespace-pre-line">
            {blog.subText2}
          </p>}
        </div>

        <h2 className=" font-semibold mb-4 text-[1.2rem] font-heading text-center  w-[70%] mx-auto md:pt-10 md:w-[100%] md:text-center">
          {blog.subTitle3}
        </h2>
        <p className="mb-4 leading-[1.9rem] text-fluid whitespace-pre-line">
          {blog.subText3}
        </p>

        <h2 className=" font-semibold mb-4 text-[1.2rem] font-heading pt-6 text-center md:text-left w-[70%] mx-auto md:w-[100%]">
          {blog.subTitle4}
        </h2>
        <p className="mb-4 leading-[1.9rem] text-fluid whitespace-pre-line">
          {blog.subText4}
        </p>

        <img className="md:hidden" src={blog.billboard} alt="" />
        <img className="w-[100%] h-auto my-6 md:block hidden " src={blog.billboard} alt="" />

        <hr className="w-[100%] h-[2px] bg-gray-400 mt-24" />

        <div className="w-[100%] mt-6 md:mt-16 md:flex-row md:items-center md:justify-between flex flex-col gap-y-5">
          <div className="flex flex-col gap-4">
            <p className="text-[15px] font-bold text-[#5C5C5C]">
              This article was written by
            </p>
            <div className="flex items-center gap-3">
              <img src={profile} alt="" />
              <h2 className="font-heading text-[20px]">{blog.authorsName}</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[24px] font-medium">Share on</p>
            <img src={x} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={facebook} alt="" />
            <img src={Messages} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 ~pt-10/[4.63rem] ~pb-10/[6.75rem] px-4 mt-6 ">
        <div className="max-w-[1260px] mx-auto bg-[#ECF5EB] border border-white rounded-2xl  flex justify-center items-center flex-col py-[50px] gap-y-5">
          <h3 className=" ~text-[1.25rem]/[2.625rem] font-semibold">Do you need to see someone?</h3>
          <p className="mt-2 text-fluid mx-auto max-w-[911px] text-center">
            If anxiety is impacting your life, don't hesitate to seek help.
            Contact a mental health professional for support and guidance.
          </p>
          <button className="mt-4 w-[30%]  py-[6px] bg-none text-[#127801] border border-[#127801] rounded-[25px] hover:bg-[#127801] hover:text-[white] transition-colors duration-400">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bloginfo;
