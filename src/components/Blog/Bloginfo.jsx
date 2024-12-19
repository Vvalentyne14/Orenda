import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./Blogs";
import "./BlogInfoPage.css";
import stick from "../../assets/stick.png";
import kimberly from "../../assets/kimberly.png";
import oren from "../../assets/oren.jpg";
import emojicon from "../../assets/emojicon.png";
import pen from "../../assets/pen.png";
import orenda from "../../assets/orenda.jpg";
import idea from "../../assets/idea.png";
import chrismas from "../../assets/chrismas.jpg";

import divarrleft from "../../assets/divarrleft.png";
import divarr from "../../assets/divarr.png";
// import "./Blogs.css";
// import profile from "../../assets/profile.png";
// import x from "../../assets/X.png";
// import LinkedIn from "../../assets/LinkedIn.png";
// import facebook from "../../assets/Facebook.png";
// import Messages from "../../assets/Messages.png";

const Bloginfo = () => {
  const { title } = useParams();
  const blog = blogs.find((blog) => blog.title === title);

  return (
    <div className="bloginfo-page">
      {/* <div className="max-w-[1215px] mx-auto p-6 bg-white flex flex-col gap-2">
        <h4 className="flex items-center justify-center font-dm-sans text-[#757575]">
          <span>Home / Blog / {blog.title}</span>
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
      </div> */}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="font-heading">WHEN HOLIDAYS BRING STRESS</h1>
          <p className="w-[75%] font-dm-sans">
            Understanding how stress relates to holiday seasons and practical
            tips to make the most of the season without losing our
            minds in the process.
          </p>
          <div className="hero-meta pt-5 font-dm-sans">
            <span className="tag text-[0.8rem]">Holidays</span>
            <span className="tag text-[0.8rem]">Anxiety</span>
            <span className="read-time text-[0.8rem]">4 min read</span>
          </div>
        </div>
        {/* Tiny Boxes */}
        {/* <div className="tiny-boxes"></div> */}
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="content-container">
          {/* Left Section */}
          <div className="left-section">
            <p className="p font-dm-sans">
              The holiday season is often portrayed as a time of joy,
              togetherness, and celebration. Yet, for many, it brings stress,
              anxiety, and even sadness. If the holidays leave you feeling more
              frazzled than festive, you’re not alone. Studies show that{" "}
              <span className="font-bold">38%</span> of people report increased
              stress during the holiday season, citing financial strain, family
              dynamics, and time pressure as major contributors (
              <span className="font-semibold text-blue-900">
                <a href="https://www.apa.org">
                  American Psychological Association, 2022
                </a>
              </span>
              ).
            </p>

            <br />

            <blockquote className="font-dm-sans">
              But don’t worry—there are ways to navigate these challenges and
              rediscover the magic of the season. Let’s unpack why the holidays
              can be stressful and explore some practical strategies to help you
              manage your mental health during this time.
            </blockquote>

            <div className="font-bold font-heading text-[2rem] pt-10">
              <h1>Now, why exactly do holidays bring stress?</h1>
              <img src={oren} alt="" className="orend" />
            </div>

            <div>
              <li className="font-heading text-[1.2rem] py-5">
                Financial Strain
              </li>
              <p className="font-dm-sans px-8">
                Gift-giving, parties, and year-end expenses can quickly pile up.
                According to a 2022 survey by Bankrate, 41% of Americans feel
                financially stressed during the holidays. The pressure to meet
                expectations can lead to overspending and lingering debt.
              </p>
              <li className="font-heading text-[1.2rem] py-5">
                Family Expectations
              </li>
              <p className="font-dm-sans px-8">
                Holiday gatherings often come with high expectations. Unresolved
                conflicts, managing different personalities, or simply hosting
                can feel overwhelming. The pressure to create a "perfect"
                holiday experience adds to the tension.
              </p>
              <li className="font-heading text-[1.2rem] py-5">
                Grief and Loss
              </li>
              <p className="font-dm-sans px-8">
                For those who’ve lost loved ones, the holidays can intensify
                feelings of sadness and grief. Empty seats at the table or
                cherished traditions that now feel hollow can be especially
                challenging.
              </p>
              <li className="font-heading text-[1.2rem] py-5">
                Social Pressure
              </li>
              <p className="font-dm-sans px-8">
                The portrayal of idealized holidays on social media can make us
                feel inadequate. Comparing ourselves to others’ curated lives
                often leads to stress, loneliness, or self-doubt.
              </p>
            </div>
          </div>

          <div className="right-section">
            {/* Poll Section */}
            <div className="poll-section relative bg-orenda-purple bg-logo bg-repeat-round bg-center py-4 bg-fixed bg-[lenght:100px] sm:bg-[lenght:150px] mt-8 flex flex-col">
              <div className="w-[80%] flex flex-col p-8">
                <h2 className="font-heading font-bold text-[2rem] text-[#fff]">
                  What stresses you out the most during the holidays?
                </h2>
                <label className="py-2 font-dm-sans">
                  <input type="checkbox" className="poll-checkbox" /> Gift
                  shopping
                </label>
                <label className="py-2 font-dm-sans">
                  <input type="checkbox" className="poll-checkbox" /> Financial
                  pressure
                </label>
                <label className="py-2 font-dm-sans">
                  <input type="checkbox" className="poll-checkbox" /> Lack of
                  time
                </label>
                <label className="py-2 font-dm-sans">
                  <input type="checkbox" className="poll-checkbox" /> Family
                  dynamics
                </label>
                <label className="py-2 font-dm-sans">
                  <input type="checkbox" className="poll-checkbox" /> Grief
                </label>
                <img src={pen} alt="" className="pen" />
              </div>
            </div>
          </div>

          <div className=" p-4 my-8 w-[95%]">
            <div>
              <h1 className="font-heading text-[1.8rem] py-4">
                Practical Tips to Manage Holiday Stress
              </h1>
              <p className="font-bold">
                Here are some effective strategies to help you stay grounded and
                make the most of the season:
              </p>
              <div className="list-decimal">
                <li className="font-heading  text-[1.2rem] py-5">
                  Set Realistic Expectations
                </li>
                <p className="font-dm-sans px-8">
                  Not every moment has to be perfect. Focus on what truly
                  matters to you and let go of the need to meet everyone’s
                  expectations. Remember, your presence is more valuable than
                  the presents.
                </p>
                <li className="font-heading text-[1.2rem] py-5">Stay Active</li>
                <p className="font-dm-sans px-8">
                  Physical activity is a natural stress reliever. Go for a brisk
                  walk, try a holiday-themed workout, or even dance to your
                  favorite festive tunes. Exercise boosts endorphins and helps
                  counteract the effects of stress.
                </p>
                <li className="font-heading text-[1.2rem] py-5">
                  {" "}
                  Create a Budget
                </li>
                <p className="font-dm-sans px-8">
                  Plan your holiday spending in advance. Allocate specific
                  amounts for gifts, decorations, and events—and stick to it.
                  Homemade gifts or shared experiences can be just as meaningful
                  as expensive items.
                </p>
                <li className="font-heading text-[1.2rem] py-5">
                  Set Boundaries
                </li>
                <p className="font-dm-sans px-8">
                  It’s okay to say no. Whether it’s declining an invitation or
                  setting limits on how much you take on, protecting your time
                  and energy is essential.
                </p>
                <li className="font-heading text-[1.2rem] py-5">
                  {" "}
                  Seek Support
                </li>
                <p className="font-dm-sans px-8">
                  If feelings of stress or sadness become overwhelming, reach
                  out. Talk to a trusted friend, family member, or mental health
                  professional. Sometimes, sharing your thoughts can provide
                  relief and perspective.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="relative">
              <p className="flex font-bold">
                Orenda Tip <img src={idea} alt="" className="w-8" />
              </p>
            </div>
            <div className="p-6">
              <h1 className="font-heading text-[1.6rem]">
                Fun Ways to Infuse Joy into Your Holidays
              </h1>
              <img src={chrismas} alt="" className="h-[20rem] rounded-lg m-6" />

              <div>
                <li className="font-heading text-[1.2rem] py-5">Start a New Tradition</li>
                <p className="font-dm-sans px-8">Feeling weighed down by old routines? Create a new tradition that brings you joy—like a movie night, baking cookies with friends, or volunteering at a local shelter.
                </p>

                <li className="font-heading text-[1.2rem] py-5"> Create a “Joy Jar”</li>
                <p className="font-dm-sans px-8">Write down small moments of happiness throughout the season and add them to a jar. At the end of the holidays, read them to reflect on the positive highlights.</p>

                <li className="font-heading text-[1.2rem] py-5"> Unplug from Technology</li>
                <p className="font-dm-sans px-8">Take a break from social media and screens. Engage in activities like board games, crafting, or storytelling to foster meaningful connections with loved ones.</p>
              </div>
            </div>
          </div>


          <div className="p-4">
            <h1 className="font-heading text-[1.6rem]">When to Seek Help</h1>
            <p className="font-dm-sans">If holiday stress is something you deal with, it may be time to seek professional help. Signs to watch for include:</p>
            <div className="p-6 font-dm-sans">
              <li>Persistent feelings of sadness or hopelessness.</li>
              <li>Difficulty sleeping or changes in appetite.</li>
              <li>Lack of interest in activities you usually enjoy.</li>
              <li>Trouble concentrating or making decisions.</li>
            </div>
            <p className="font-dm-sans">At Orenda Psychiatry, we’re here to support you. Our compassionate providers can help you navigate the complexities of the holiday season with tailored strategies and care.
            </p>
          </div>

          <div className="bg-orenda-purple text-[1rem] italic flex justify-center text-center text-white p-4 border rounded-md my-8 final">
            <p>It is YOUR holiday, so make it YOURS.</p>
          </div>
        </div>

        {/* Author Info & Sticky Note Section */}
        <div className="author-sticky-section">
          <div className="flex flex-col">
            <div className="author-info pb-4">
              <img src={kimberly} alt="Author" className="author-image" />
              <div className="author-details">
                <h4 className="font-heading">Kimberly Levitt</h4>
                <p className="font-dm-sans text-[.8rem]">PMHNP-BC</p>
              </div>
            </div>
          </div>

          <hr className="mt-8 mb-8 w-[100%]" />

          <div className="bg-[#ecf5eb] p-8 border rounded-md">
            <h2 className="font-heading text-[1.5rem] pb-4">
              Feeling overwhelmed{" "}
              <span className="font-extrabold font-heading">?</span>
            </h2>
            <p className="font-extralight">
              Don’t hesitate to reach out. Schedule a session with Orenda
              Psychiatry today and take the first step toward a stress-free
              holiday season.
            </p>
            <div>
              <img
                src={stick}
                alt=""
                style={{ width: 200 }}
                className="stick"
              />
            </div>
          </div>

          <hr className="mt-8 mb-8 w-[100%]" />

          {/* Sticky Note Section */}
          <div className="sticky-note bg-orenda-purple text-white">
            <div>
              {/* <img src={emojicon} alt="" className="emojicon" /> */}
            </div>
            <div>
              <h4 className="font-heading text-[1.5rem] underline"></h4>
              <p className="font-dm-sans">
                - It is the season, and society sometimes poses some unrealistic
                expectations. Be kind to yourself and remember that it’s okay to
                take a step back. .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bloginfo;
