import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CountUp from "react-countup";
import "./Hero.css";
import washpark from "../../../assets/washpark.png";
import plus from "../../../assets/plus.png";
import faces from "../../../assets/faces.png";
import Icon from "../../../assets/Icon.png";
import user from "../../../assets/user.png";
import pluswhite from "../../../assets/pluswhite.png";
import pluswhitee from "../../../assets/pluswhite.png";
import homepagecrop from "../../../assets/homepage-crop.jpg";
import homepage from "../../../assets/homepage.jpg";
import pluswhiter from "../../../assets/plus_white.png";

const Hero = () => {

  
  const providersRef = useRef(null);
  const livesChangedRef = useRef(null);
  const borderTL = useRef(null)

  useEffect(() => {
    gsap.fromTo(providersRef.current, 
      { scale: 1.4 }, 
      { scale: 1, duration: 1
        , ease: 'power.out', delay: 0.5}
    );
    gsap.fromTo(livesChangedRef.current, 
      { scale: 1.3 }, 
      { scale: 1, duration: 1
        , ease: 'power.out', delay: 0.5 }
    );

    // borderTL.current = gsap.timeline()
    // borderTL.current = gsap.timeline()
    //   .from(
    //     ".bord-Animation", 
    //     { borderTopWidth: 0 }, 
    //     { borderTopWidth: "1px", duration: 2.5, }
    //   )
    //   .from(
    //     ".bord-Animation", 
    //     { borderRightWidth: 0 }, 
    //     { borderRightWidth: "1px", duration: 2.5,  }
    //   )
    //   .from(
    //     ".bord-Animation", 
    //     { borderBottomWidth: 0 }, 
    //     { borderBottomWidth: "1px", duration: 2.5, }
    //   )
    //   .from(
    //     ".bord-Animation", 
    //     { borderLeftWidth: 0 }, 
    //     { borderLeftWidth: "1px", duration: 2.5,  }
    //   );

    
  }, []);

  

  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="texts">
            <h1 className="">
              Online Psychiatry Practice Prescription Management and Talk
              Therapy
            </h1>
            <p className="font-dm-sans">
              Providing Mental Health Care with Convenience.
            </p>
            <button>
              <a
                target="_blank"
                href="https://www.zocdoc.com/wl/orendapsych/search?address=10016&after_5pm=false&before_10am=false&day_filter=AnyDay&dr_specialty=405&filters=%7B%7D&gender=-1&insurance_carrier=-1&insurance_plan=-1&language=-1&offset=0&parentSearchRequestId=5ad6e11b-e197-4dc6-8576-3101647da281&ppsSelectionId=f697582c-2de0-4006-ab39-53b075bb2ef4&reason_visit=493&searchOriginator=SearchBar&searchQueryGuid=8d62bd4a-fe91-43fa-bbec-391fc97eecdb&searchType=specialty&search_query=Adult+Psychiatric+%26+Mental+Health+Nurse+Practitioner&sees_children=false&sort_type=Default&visitType=inPersonAndVirtualVisits"
              >
                Book Now
              </a>
            </button>
          </div>
          <div className="items">
            <div className="items-right bord-Animation">
              <div className="items-right-contents">
                <p className="font-open-sans w-16" ref={providersRef}>
                  <CountUp start={0} end={70} duration={5} />
                  <img src={pluswhiter} alt="plus icon" style={{ width: 15 }} />
                </p>
                <img src={Icon} alt="icon" style={{ width: 13 }} />
              </div>
              <p>Providers</p>
              <img src={faces} alt="" style={{ width: 200 }} />
            </div>
            <div className="items-left bord-Animation">
              <div className="items-left-contents">
                <div className="items-left-img" ref={livesChangedRef}>
                  <p>
                    <CountUp
                      start={0}
                      end={20000}
                      duration={4}
                      formattingFn={(val) => `${Math.floor(val / 1000)}k`}
                    />
                    <img
                      src={pluswhiter}
                      alt="plus icon"
                      style={{ width: 15 }}
                    />
                  </p>
                </div>
                <img src={user} alt="user icon" style={{ width: 45 }} />
              </div>
              <p style={{ fontSize: 20 }}>Lives changed</p>
            </div>
          </div>

          <div className="items-mobile bord-Animation">
            <div className="it-mobile-left" >
              <div>
                <h1 ref={providersRef}>
                  <CountUp start={0} end={70} duration={3} /> 
                  <span>+</span>
                </h1>
                <img src={Icon} alt="" />
              </div>
              <p>Providers</p>
              <img src={faces} alt="" />
            </div>
            <div className="line"></div>
            <div className="it-mobile-right" >
              <h1 ref={livesChangedRef}>
                <CountUp
                  start={0}
                  end={20000}
                  duration={3}
                  formattingFn={(val) => `${Math.floor(val / 1000)}k`}
                />
                <span>+</span>
              </h1>
              <p>Lives Changed</p>
              <img src={user} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="washpark"><LazyLoadImage effect = 'blur' height = "100%" src={homepagecrop} alt=""  className="w-full h-full"/></div> */}
      </div>
    </div>
  );
};

export default Hero;
