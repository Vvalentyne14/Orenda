import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import "./Meet.css";
import lifesavers from "../../../assets/lifesavers.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Meet = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.from(".lifesavers", {
      scale: 0.8,
      duration: 1,
      ease: "bounce.out",
    }).to(".lifesavers", {
      scale: 1.2,
      duration: 1,
      ease: "bounce.in",
    });

    gsap.fromTo(
      ".left > *",
      {
        y: 150,        // Start 50px down
        opacity: 0,   // Start with 0 opacity
        filter: "blur(2px)", // Optional: start slightly blurred if needed
        duration: 1.5,
      },
      {
        scrollTrigger: ".left",
        y: 0,         // End at the original position
        opacity: 1,   // End with full opacity
        filter: "blur(0px)", // Ensure no blur at the end
        duration: 1,  // Animation duration
        ease: "power2.out",  // Easing function
        stagger: 0.2, // Stagger by 0.2 seconds
      }
    );
    gsap.fromTo(
      ".right > *",
      {
        y: 150,        // Start 50px down
        opacity: 0,   // Start with 0 opacity
        filter: "blur(2px)", // Optional: start slightly blurred if needed
        duration: 1.5,
      },
      {
        scrollTrigger: ".right",
        y: 0,         // End at the original position
        opacity: 1,   // End with full opacity
        filter: "blur(0px)", // Ensure no blur at the end
        duration: 1,  // Animation duration
        ease: "power2.out",  // Easing function
        stagger: 0.2, // Stagger by 0.2 seconds
      }
    );

    
  }, []);

  return (
    <div className="meet-container">
      <div className="meet-wrapper">
        <div className="left">
          <h1>Not sure who to meet?</h1>
          <p>
            Take this assessment and we'll help pair you to the right provider.
          </p>
          <div>
            <button className="btn-meet btn-meet-effect">Take Assessment</button>
          </div>
        </div>
        <div className="right">
          <img src={lifesavers} alt="" className="lifesavers" />
        </div>
      </div>
    </div>
  );
};

export default Meet;
