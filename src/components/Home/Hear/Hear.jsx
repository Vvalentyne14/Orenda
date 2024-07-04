import "./Hear.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ReviewsNavigation from "./ReviewsNavigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import quote from "../../../assets/quote.png"

const Hear = () => {
  return (
    <div className="hear-container">
      <div className="px-0">
        <h2 className="font-heading  text-center hear-text">Hear from our Clients</h2>
        <div className="px-4">
        <div className="max-w-[50.13rem] mx-auto relative">
        <img src={quote} alt="" className="absolute -left-8 -top-[3.4rem] ~size-10/[4rem]" />
          <Swiper modules={[Navigation, Pagination]}>
         
            <SwiperSlide className="relative sslide">
              <div className=" grid gap-6 font-dm-sans text-[18px] leading-[26px]">
                <p>
                  “The staff at this location is amazing! The providers are
                  great, easy to schedule with and extremely accommodating! They
                  are so helpful in trying to make sure all of your needs are
                  met and everything goes smoothly in addition to being so
                  responsive and supportive. I also have to mention how great
                  the women who answer the phones are! Everyone I’ve interacted
                  with at this practice has been so kind and helpful. I highly,
                  highly recommend!!”
                </p>
              </div>
              <div className=" bg-[rgb(239,235,223)]  mx-auto mt-6 mb-4">
                <hr className="w-full" />
              </div>
              <div className="flex  items-center gap-4 ">
                <div className="initials font-open-sans bg-white">VE</div>
                <p className="font-open-sans font-bold ~text-[0.69rem]/[1.66rem]">Vanessa E.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative sslide">
              <div className="leading-[26px] grid gap-6 font-dm-sans text-[18px]">
                <p>
                  “The staff at this location is amazing! The providers are
                  great, easy to schedule with and extremely accommodating! They
                  are so helpful in trying to make sure all of your needs are
                  met and everything goes smoothly in addition to being so
                  responsive and supportive. I also have to mention how great
                  the women who answer the phones are! Everyone I’ve interacted
                  with at this practice has been so kind and helpful. I highly,
                  highly recommend!!”
                </p>
              </div>
              <div className=" bg-[rgb(239,235,223)]  mx-auto mt-6 mb-4 ">
                <hr className="w-full"  />
              </div>
              <div className="flex  items-center gap-4">
                <div className="initials fon bg-white">VE</div>
                <p className="font-open-sans font-bold ~text-[0.69rem]/[1.66rem]">Vanessa E.</p>
              </div>
            </SwiperSlide>

            <ReviewsNavigation />
          </Swiper>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Hear;
