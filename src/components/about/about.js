import React from "react";
import "./about.scss";

const about = () => {
  return (
    <div>
      <section class="hero is-medium">
        <div class="hero-head has-text-centered">
          <p class="title">About Me</p>
        </div>
        <div class="columns hero-body">
          <div class="column is-two-fifths">First column</div>
          <div class="column">Second column</div>
        </div>
      </section>
    </div>
  );
};

export default about;
