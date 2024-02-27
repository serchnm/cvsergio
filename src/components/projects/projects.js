import React from "react";
import oomph from "../../image/oomph.png";
import lunchbunch from "../../image/lunchbunch.png";
import avit from "../../image/avit.png";
import bbrokers from "../../image/bbrokers.png";
import dynamo from "../../image/dynamo.png";
import motyl from "../../image/motyl.png";
import regional from "../../image/regional.png";
import zellify from "../../image/zellify.png";
import Card from "../card/card";
import "./projects.scss";

const projects = () => {
  return (
    <div id="project-section">
      <section className="hero is-medium">
        <div className="hero-head has-text-centered">
          <p className="title">Projects</p>
        </div>
        <div className="columns hero-body is-multiline">
          <div className="column is-one-quarter">
            <Card image={oomph} title={"Oomph"} alt={1} />
          </div>
          <div className="column is-one-quarter">
            <Card image={lunchbunch} title={"Lunch bunch"} alt={2} />
          </div>
          <div className="column is-one-quarter">
            <Card image={avit} title={"Avit Solutions"} alt={3} />
          </div>
          <div className="column is-one-quarter">
            <Card image={bbrokers} title={"Breakthrough broker"} alt={4} />
          </div>
          <div className="column is-one-quarter">
            <Card image={dynamo} title={"Dynamo"} alt={5} />
          </div>
          <div className="column is-one-quarter">
            <Card image={motyl} title={"Motyl"} alt={6} />
          </div>
          <div className="column is-one-quarter">
            <Card image={regional} title={"La Regional"} alt={7} />
          </div>
          <div className="column is-one-quarter">
            <Card image={zellify} title={"Zellify"} alt={8} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default projects;
