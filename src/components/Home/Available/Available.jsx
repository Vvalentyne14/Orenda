import React from "react";
import "./Available.css";
import newyork from "../../../assets/newyork.png";
import newjersey from "../../../assets/newjersey.png";
import massachusetts from "../../../assets/massachusetts.png";
import connecticut from "../../../assets/connecticut.png";
import newyorkmob from "../../../assets/newyork-mob.png";
import massachusettsmob from "../../../assets/massachusetts-mob.png";
import connecticutmob from "../../../assets/connecticut-mob.png";
import newjerseymob from "../../../assets/newjersey-mob.png";

const Available = () => {
  return (
    <div className="available-container">
      <div className="available-wrapper">
        <h1>Available Locations</h1>
        <p>We currently serve in these 4 states</p>
        <div className="avail-img">
        <picture>
            <source media="(min-width: 451px)" srcset={newyork} />
            <img src={newyorkmob} alt="newyork" />
          </picture>
          <picture>
            <source media="(min-width: 451px)" srcset={connecticut} />
            <img src={connecticutmob} alt="connecticut" />
          </picture>
          <picture>
            <source media="(min-width: 451px)" srcset={newjersey} />
            <img src={newjerseymob} alt=" New Jersey" />
          </picture>
          <picture>
            <source media="(min-width: 451px)" srcset={massachusetts} />
            <img src={massachusettsmob} alt="Massachusetts" />  
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Available;
