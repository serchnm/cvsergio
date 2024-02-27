import React from "react";
import "./skills.scss";

const skills = ({ sharedData }) => {
  let skills = sharedData.icons.map((skills, key) => {
    return (
      <li className="list-inline-item" key={key}>
        <span>
          <div className="text-center skills-tile">
            <i className={skills.class} style={{ fontSize: "220%" }}>
              <p
                className="text-center"
                style={{ fontSize: "30%", marginTop: "4px" }}
              >
                <span>{skills.name}</span>
              </p>
            </i>
          </div>
        </span>
      </li>
    );
  });
  return (
    <div id="skill-section">
      <section class="hero is-success">
        <div class="hero-head has-text-centered">
          <p class="title">Skills</p>
        </div>
        <div class="hero-body">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </section>
    </div>
  );
};

export default skills;
