import React from "react";
import { Icon } from "@iconify/react";
import profyleImg from "../../image/IMG_4295.jpg";
import "./about.scss";

const about = ({ sharedData }) => {
  return (
    <div id="about-section">
      <section className="hero is-medium">
        <div className="hero-head has-text-centered">
          <p className="title">About Me</p>
        </div>
        <div className="columns hero-body">
          <div className="column is-two-fifths polaroid">
            <span style={{ cursor: "auto" }}>
              <img height={250} src={profyleImg} alt="Avatar placeholder" />
              <Icon
                icon="logos:nodejs-icon"
                style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
              />
              <Icon
                icon="logos:react"
                style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
              />
              <Icon
                icon="logos:vue"
                style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
              />
            </span>
          </div>
          <div className="column">
            <div className="card-container">
              <div className="card-header">
                <Icon
                  icon="emojione:red-circle"
                  className="icon-tab"
                  inline={false}
                />{" "}
                &nbsp;{" "}
                <Icon
                  icon="twemoji:yellow-circle"
                  className="icon-tab"
                  inline={false}
                />{" "}
                &nbsp;{" "}
                <Icon
                  icon="twemoji:green-circle"
                  className="icon-tab"
                  inline={false}
                />
              </div>
              <div
                className="card-body font-trebuchet text-justify ml-3 mr-3"
                style={{
                  height: "auto",
                  fontSize: "132%",
                  lineHeight: "200%",
                }}
              >
                <br />
                <span className="wave">Hi :) </span>
                <br />
                {sharedData.description}
                <br />
                <span>
                  {sharedData.city} <Icon icon="emojione-v1:flag-for-mexico" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
