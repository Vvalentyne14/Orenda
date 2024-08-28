// import React from "react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Journey.css";
import video from "../../../assets/video.png";
import support from "../../../assets/support.png";
import booking from "../../../assets/booking.png";
import undraw from "../../../assets/undraw.png";
import call from "../../../assets/call.png";
import text from "../../../assets/text.png";
import mail from "../../../assets/mail.png";
import callpurple from "../../../assets/callpurple.png";
import Disclaimer from "../Disclaimer/Disclaimer";

const Journey = () => {
  // Create a timeline with looping
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Zoom In Bounce
    tl.from(".video", {
      scale: 1.1, // Start from scale 0 (completely zoomed out)
      duration: 1, // Animation duration
      ease: "bounce.out", // Bounce effect as it zooms in
    })

      // Zoom Out Bounce
      .to(".video", {
        scale: 1.7, // End at scale 0 (completely zoomed out)
        duration: 1, // Animation duration
        ease: "bounce.in", // Bounce effect as it zooms out
      });
  }, []);

   useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.fromTo(
      ".booking", 
      { scale: 1.1 }, // Initial state: slightly zoomed out
      { scale: 1.5, duration: 1, ease: "power2.inOut" } // Zoom in
    )
      .to(".booking", { rotate: -45, duration: .5, ease: "power2.inOut" }) // Rotate left by 45 degrees
      .to(".booking", { rotate: 45, duration: .5, ease: "power2.inOut" }) // Rotate right by 45 degrees
      .to(".booking", { scale: 1, duration: 1, ease: "power2.inOut" }); // Zoom out
  }, 
  
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.from( ".support", {
      scale: 1.1,
      duration: 1,
      ease: "bounce.out",
    })

    .to(".support", {
      scale: 1.7,
      duration: 1,
      ease: "bounce.inOut"
    });
  }),
  []);

  useEffect(() => {

    let mm = gsap.matchMedia();
        //This is the service page for screen size of 999px and below
        mm.add("(max-width: 450px)", () => {
            const locations = gsap.utils.toArray(".icon-prop");
            locations.forEach(iconProp => {
                gsap.to(iconProp, {
                    y:0,
                    opacity: 1,
                    scrollTrigger:{
                        trigger:iconProp,
                        start: "top 70%",
                    }
                })
            })
        });

        mm.add("(min-width: 451px)", () => {
          let tlthree = gsap.timeline({
              scrollTrigger: {
                  trigger: '.icon-prop',
                  start:"top 80%"
              }
          })
          tlthree.to('.icon-cards', {y:0, stagger: 1.2, ease:"back", opacity: 1, delay: 1})

          gsap.to('.icon-prop', {y:0, stagger: .4,ease:"back", opacity: 1, delay: .3,
              scrollTrigger:{
                  trigger:".icon-prop",
                  start:"top 80%"
              }
          })
      });    

  }) 

  return (
    <div className="journey-container">
      <div className="journey-wrapper">
        <h1>Your Journey with Orenda</h1>
        <div className="icon-cards">
          <div className="icon-prop">
            <div className="icon">
              <img className="booking" src={booking} alt="" />
            </div>
            <h3>Book your first appointment</h3>
            <p>
              Call or text us to setup with a provider that suits you, at the
              time that works for you.
            </p>
          </div>
          <div className="icon-prop">
            <div className="icon">
              <img className="video" src={video} alt="" />
            </div>
            <h3>Meet with your provider</h3>
            <p>Connect with your provider over a video call.</p>
          </div>
          <div className="icon-prop">
            <div className="icon">
              <img className="support" src={support} alt="" />
            </div>
            <h3>Support when you need it</h3>
            <p>
              Get help outside from our support team and schedule follow-ups at
              your convenience.
            </p>
          </div>
        </div>
        <hr />
        <Disclaimer/>
        <div className="patient">
          <div className="new-patient">
            <img src={undraw} alt="" className="~w-[2.5rem]/[9rem]" />
            <h2>New Patient?</h2>
            <p>To schedule your first appointment;</p>
            <a
              className="w-full mx-auto flex justify-center call"
              href="tel:+1234567890"
            >
              <button>
                <img src={callpurple} alt="" /> Call Now
              </button>
            </a>
            <a
              className="two block  w-full"
              href="https://www.zocdoc.com/wl/orendapsych/search?address=10016&after_5pm=false&before_10am=false&day_filter=AnyDay&dr_specialty=405&filters=%7B%7D&gender=-1&insurance_carrier=-1&insurance_plan=-1&language=-1&offset=0&parentSearchRequestId=5ad6e11b-e197-4dc6-8576-3101647da281&ppsSelectionId=f697582c-2de0-4006-ab39-53b075bb2ef4&reason_visit=493&searchOriginator=SearchBar&searchQueryGuid=8d62bd4a-fe91-43fa-bbec-391fc97eecdb&searchType=specialty&search_query=Adult+Psychiatric+%26+Mental+Health+Nurse+Practitioner&sees_children=false&sort_type=Default&visitType=inPersonAndVirtualVisits"
            >
              <button className="two block w-full mx-auto">Book Online</button>
            </a>
          </div>
          <div className="existing-patient">
            <h2>Existing patient?</h2>
            <p>To schedule a follow-up appointment;</p>
            <a
              className="w-full mx-auto flex justify-center call"
              href="tel:+1234567890"
            >
              <button>
                <img src={call} alt="" className="color-img" /> Call Now
              </button>
            </a>
            <a
              className="w-full mx-auto flex justify-center"
              href="sms:+1234567890"
            >
              <button className="text">
                Text <img src={text} alt="" />
              </button>
            </a>
            <a
              className="w-full mx-auto flex justify-center"
              href="mailto:example@example.com"
            >
              <button className="mail">
                Email <img src={mail} alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
