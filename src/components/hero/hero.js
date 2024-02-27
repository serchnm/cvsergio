import React from "react";
import Typical from "react-typical";
import { Icon } from "@iconify/react";
import ColorSwitch from "../colorSwitch/colorSwitch";
import "./hero.scss";

const hero = ({ sharedData }) => {
  let titles = [];
  if (sharedData) {
    titles = sharedData.titles.map((x) => [x.toUpperCase(), 2000]).flat();
  }

  return (
    <div>
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title"></p>
            <Icon
              className="iconify header-icon"
              icon="la:laptop-code"
              inline={false}
            />
            <br />
            <h1 className="title">
              <Typical steps={[sharedData.name, 1500]} wrapper="p" />
            </h1>
            <div className="hero-container-body">
              <Typical steps={titles} loop={50} />
            </div>
            <br />
            <div className="color-switch">
              <ColorSwitch />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
