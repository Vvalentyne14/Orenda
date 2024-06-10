import React from "react";
import "./Hear.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import sidecycle from "../../../assets/sidecycle.png";
import quote from "../../../assets/quote.png";
import ve from "../../../assets/ve.png";
import arrowright from "../../../assets/arrowright.png";
import arrowleft from "../../../assets/arrowleft.png";

import { Pagination, Navigation } from "swiper/modules";

const Hear = () => {
  return (
    <div className="hear-container">
      <div className="hear-wrapper">
        <img src={sidecycle} alt="" className="sidecycle" />
        <img src={quote} alt="" className="quote"/>
        <h1>Hear from our Clients!</h1>

        <div className="">
          <div className="App">
            <Swiper
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div
                  className="swiper-me"
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  <p>
                    “The staff at this location is amazing! The providers are
                    great, easy to schedule with and extremely accommodating!
                    They are so helpful in trying to make sure all of your needs
                    are met and everything goes smoothly in addition to being so
                    responsive and supportive. I also have to mention how great
                    the women who answer the phones are! Everyone I’ve
                    interacted with at this practice has been so kind and
                    helpful. I highly, highly recommend!!”
                  </p>
                  <hr
                    style={{
                      width: "49rem",
                      margin: "45px auto",
                      border: "0",
                      borderTop: "2px solid #EBE7DC",
                    }}
                  />
                </div>
                <div className="slider-base">
                  <div className="slider-comp">
                    <img src={ve} alt="" />
                    <h2>Vanessa E.</h2>
                  </div>
                  <div className="slider-arr">
                    <img src={arrowleft} alt="" />
                    <img src={arrowright} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-me"
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  <p>
                    “The staff at this location is amazing! The providers are
                    great, easy to schedule with and extremely accommodating!
                    They are so helpful in trying to make sure all of your needs
                    are met and everything goes smoothly in addition to being so
                    responsive and supportive. I also have to mention how great
                    the women who answer the phones are! Everyone I’ve
                    interacted with at this practice has been so kind and
                    helpful. I highly, highly recommend!!”
                  </p>
                  <hr
                    style={{
                      width: "49rem",
                      margin: "45px auto",
                      border: "0",
                      borderTop: "2px solid #EBE7DC",
                    }}
                  />
                  <div className="slider-comp">
                    <img src={ve} alt="" />
                    <h2>Vanessa E.</h2>
                  </div>
                </div>
                <div className="slider-base">
                  
                  <div className="slider-arr">
                    <img src={arrowleft} alt="" />
                    <img src={arrowright} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              {/* Add more SwiperSlide components as needed */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hear;
