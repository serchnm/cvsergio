import React from "react";
import "./hero.scss";

const hero = ({ sharedData }) => {
  console.log(sharedData);
  return (
    <div>
      <section>
        <div>
          <h1>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <span>{sharedData.name}</span>
            <span>iPhone 15 pro</span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default hero;
