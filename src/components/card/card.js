import React from "react";
import "./card.scss";

const card = ({ image, title, alt }) => {
  return (
    <div class="card card-section">
      <div class="card-image">
        <figure class="image is-5by3">
          <img src={image} alt={`project-${alt}`} />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">{title}</div>
      </div>
    </div>
  );
};

export default card;
