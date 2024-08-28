import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Location.css";
import newview from "../../../assets/newview.png";
import call from "../../../assets/call.png";

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".location-container", // Start animation when .location-container comes into view
        start: "top center", // Animation starts when top of the element reaches the center of the viewport
        end: "bottom center", // Animation continues until the bottom of the element reaches the center of the viewport
        toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
      }
    })
    .to(".newview", {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "power2.out"
    })
    .to(".loc-prop-txt", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2.out"
    }, "-=0.5"); // Start text animation 0.5 seconds before the image animation ends
  }, []);

  return (
    <div className="location-container">
      <div className="location-wrapper">
        <h1>Our Physical location</h1>
        <p>80 5th Avenue, New York, New York, 10011.</p>
        <div className="loc-prop">
          <div className="hidden md:block">
            <img src={newview} alt="" className="newview" />
          </div>
          <div className="loc-prop-txt text-center md:text-start md:max-w-[32rem] ~pt-[4.5rem]/24 ~pb-8/24">
            <h2 className="~text-lg/2xl ~leading-[2rem]/10 max-w-[27.06rem] mx-auto md:mx-0">
              Physical appointments can be scheduled upon discussion with your
              provider.
            </h2>
            <p>Please call us to confirm!</p>
            <a href="tel:+1234567890">
              <button className="btn-loc btn w-full md:max-w-[12.44rem] mx-auto md:mx-0">
                <img src={call} alt="" className="purple" />
                Call now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
