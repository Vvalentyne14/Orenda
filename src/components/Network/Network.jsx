import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Style from "../Network/Network.module.css";
import Marquee from "react-fast-marquee";
import metro from "../../assets/metro.png";
import emblem from "../../assets/emblem.png";
import cms from "../../assets/cms.png";
import ghi from "../../assets/ghi.png";
import united from "../../assets/united.png";
import oscar from "../../assets/oscar.png";
import aetna from "../../assets/aetna.png";
import cigna from "../../assets/cigna.png";
import anthem from "../../assets/anthem.png";
import tricare from "../../assets/tricare.png";
import compsych from "../../assets/compsych.png";
import multiplan from "../../assets/multiplan.png";
import fidelis from "../../assets/fidelis-care-logo-vector.png"


gsap.registerPlugin(ScrollTrigger);

const Network = () => {
  // **Use refs to target elements for animation**
  const wrapperRef = useRef(null);  // Added ref for the wrapper

  useEffect(() => {
    // **GSAP animation with ref**
    gsap.fromTo(
      wrapperRef.current.children,  // Targets all direct children of the wrapper
      {
        y: 150,
        opacity: 0,
        filter: "blur(2px)",
      },
      {
        scrollTrigger: {
          trigger: wrapperRef.current,  // Trigger animation when this wrapper is in view
          start: "top 80%", // Adjust the trigger point (optional)
        },
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        ease: "power2.out",
        stagger: 0.2,  // Animate child elements in sequence
        duration: 1.5,
      }
    );
  }, []);


  return (
    <div className={Style.network_container}>
      <div className={Style.network_wrapper} ref={wrapperRef}>
        <div className={Style.header}>
          <h3>In network with</h3>
        </div>
        <div className={Style.slider}>
          <Marquee className={Style.marquee_main} play={true} speed={150}>
            <img src={united} alt="" className="w-[24rem]" />
            <img src={aetna} alt="" className="w-[22rem]" />
            <img src={oscar} alt=""  className="w-[19rem]" />
            <img src={cigna} alt="" />
            <img src={anthem} alt="" />
            <img src={compsych} alt="" />
            <img src={tricare} alt="" />
            <img src={multiplan} alt="" />
          </Marquee>
        </div>
        <div className={Style.texts}>
          <h4>Out of network</h4>
        </div>
        <div className={Style.nets}>
          <img src={emblem} alt=""  className="max-w-[10rem]"/>
          <img src={cms} alt="" style={{padding: 8}}  className="max-w-[3rem]"/>
          <img src={fidelis} alt=""  className="max-w-[5rem]"/>
          <img src={ghi} alt=""  className="max-w-[3rem]"/>
          <img src={metro} alt=""  className="max-w-[10rem]"/>
        </div>
        <div className={Style.netss}>
          <Marquee className={Style.marquee_main_mob} play={true} speed={150}>
            <div className="marq" style={{paddingRight: "3em"}}><img src={metro} alt="" className="max-w-[10rem]"/></div>
            <div className="marq" style={{paddingRight: "3em"}}><img src={emblem} alt="" className="max-w-[10rem]"/></div>
            <div className="marq" style={{paddingRight: "3em"}}><img src={cms} alt="" className="max-w-[3rem]"/></div>
            <div className="marq" style={{paddingRight: "3em"}}><img src={ghi} alt="" className="max-w-[3rem]"/> </div>
            <div className="marq" style={{paddingRight: "3em"}}><img src={fidelis} alt="" className="max-w-[3rem]"/> </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Network;
