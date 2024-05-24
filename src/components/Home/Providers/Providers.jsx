import React from "react";
import "./Providers.css";
import rakin from "../../../assets/rakin.png";

const Providers = () => {
  return (
    <div className="providers_container">
      <div className="providers_wrapper">
        <div className="prov_head">
          <h1>Meet Our Providers</h1>
          <button>See all providers</button>
          <div className="cards">
            <div className="prov_card">
              <img src={rakin} alt="" />
              <div className="prov_card_prop">
                <p>APRN</p>
                <h3>Rakin Rahman</h3>
                <div className="card_details">
                  <p>Ages seen</p>
                  <p>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </p>
                </div>
                <div className="card_details">
                  <p>States Licensed</p>
                  <p>New York, New Jersey & 2 more.</p>
                </div>
                <div>
                  <div>Available Today</div>
                  <button>Book online</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;
