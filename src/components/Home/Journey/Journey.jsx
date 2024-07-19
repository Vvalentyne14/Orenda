import React from "react";
import "./Journey.css";
import video from "../../../assets/video.png";
import support from "../../../assets/support.png";
import booking from "../../../assets/booking.png";
import undraw from "../../../assets/undraw.png";
import call from "../../../assets/call.png";
import text from "../../../assets/text.png";
import mail from "../../../assets/mail.png";
import callpurple from "../../../assets/callpurple.png";

const Journey = () => {
  return (
    <div className="journey-container">
      <div className="journey-wrapper">
        <h1>Your Journey with Orenda</h1>
        <div className="icon-cards">
          <div className="icon-prop">
            <div className="icon">
              <img src={booking} alt="" />
            </div>
            <h3>Book your first appointment</h3>
            <p>
              Call or text us to setup with a provider that suits you, at the
              time that works for you.
            </p>
          </div>
          <div className="icon-prop">
            <div className="icon">
              <img src={video} alt="" />
            </div>
            <h3>Meet with your provider</h3>
            <p>Connect with your provider over a video call.</p>
          </div>
          <div className="icon-prop">
            <div className="icon">
              <img src={support} alt="" />
            </div>
            <h3>Support when you need it</h3>
            <p>
              Get help outside from our support team and schedule follow-ups at
              your convenience.
            </p>
          </div>
        </div>
        <hr />
        <div className="patient">
          <div className="new-patient">
            <img src={undraw} alt="" className="~w-[2.5rem]/[9rem]" />
            <h2>New Patient?</h2>
            <p>To schedule your first appointment;</p>
            <a className="w-full mx-auto flex justify-center call" href="tel:+1234567890">
              <button>
                <img src={callpurple} alt=""/> Call Now
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
            <a className="w-full mx-auto flex justify-center call" href="tel:+1234567890">
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
