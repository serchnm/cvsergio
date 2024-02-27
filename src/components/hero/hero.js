import React, { useMemo } from "react";
import Typical from "react-typical";
import { Icon } from "@iconify/react";
import "./hero.scss";

const hero = ({ sharedData }) => {
  console.log(sharedData);
  let titles = [];
  if (sharedData) {
    console.log(titles);
    titles = sharedData.titles.map((x) => [x.toUpperCase(), 2000]).flat();
    console.log(titles);
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
            <div>
              <Typical steps={titles} loop={50} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
