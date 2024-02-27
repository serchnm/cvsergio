import React from "react";
import { Icon } from "@iconify/react";
import "./footer.scss";

function footer({ sharedData }) {
  let networks = sharedData.social.map((data, key) => {
    console.log(data);
    return (
      <span key={data.name} className="m-4">
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <Icon
            className="iconify social-icon"
            icon={data.class}
            inline={false}
          />
        </a>
      </span>
    );
  });
  return (
    <footer className="footer footer-containter">
      <div className="content has-text-centered">
        <div>{networks}</div>
        <p>Developed by Serchnm</p>
      </div>
    </footer>
  );
}

export default footer;
