import React from 'react'
import disclaim from "../../../assets/disclaim.png";

const Disclaimer = () => {
  return (
    <div className="disclaimer_container">
      <div className="disclaimer_wrapper border border-[#2e0086] mx-auto rounded-2xl flex  content-between gap-1 max-w-[71.875rem] w-auto p-6">
        <img className="w-7 h-7 hidden sm:block" src={disclaim} alt="disclaimer" />
        <div>
            <h3 className="font-heading mb-3 flex"><img className="w-7 h-7 mr-2 sm:hidden" src={disclaim} alt="disclaimer" /> Appointment Scheduling Disclaimer</h3>
           
            <p className="font-dm-sans font-medium text-base">Please note that all appointments are confirmed on a first-come, first-served basis. While we do our utmost best to accommodate your preferred schedule and provider, availability may vary due to high demand.
            <br />
            <br />
            Our dedicated support team is always here to assist you in finding the right provider and scheduling a convenient appointment time. We are committed to ensuring that your intake process is smooth and that you receive the care you need in a timely manner.
            <br />
            <br />
            If you encounter any scheduling conflicts or have specific needs, please don't hesitate to reach out to our support team.</p>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer
