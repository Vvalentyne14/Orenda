import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Handle.css";
import call from "../../../assets/call.png";

gsap.registerPlugin(ScrollTrigger);

const Handle = () => {

  

  useEffect  (() => {

    gsap.fromTo(
      ".handle > *",
      {
        y: 150,
        opacity: 0,
        filter: "blur(2px)",
        duration: 2.5,
      },
      {
        scrollTrigger: ".handle",
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.7,
        ease: "power1.out",  
        stagger: 0.4,
      }
    );

  }, []);


  return (
    <div className="handle-container">
      <div className="handle-wrapper">
        <div className="handle">
          <p>
            All of our providers are trained and licensed to handle several
            issues, if you’re not sure, please call to confirm each provider’s
            specialty.
          </p>

          <a href="tel:+123456789">
            <button className="btn-handle btn-handle-effect">
              <img src={call} alt="" className="colored-img" />
              Call Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Handle;
