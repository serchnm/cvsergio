import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import "./experience.scss";

const experience = ({ sharedData }) => {
  let workExperience = sharedData.info.map((data, key) => {
    let tech = data.technologies.map((tec) => {
      return <div className="tag is-warning is-light">{tec}</div>;
    });
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={data.years}
        iconStyle={{
          background: "#48c78e",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<Icon icon="ri:javascript-fill" style={{ fontSize: "250%" }} />}
        key={key}
      >
        <h3 className="vertical-timeline-element-title">{data.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
        <div class="tags">{tech}</div>
      </VerticalTimelineElement>
    );
  });
  return (
    <div id="experience-section">
      <section className="hero is-medium is-success">
        <div className="hero-head has-text-centered">
          <p className="title">Experience</p>
        </div>
        <div className="hero-body">
          <VerticalTimeline>
            {workExperience}
            <VerticalTimelineElement
              iconStyle={{
                background: "#48c78e",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<Icon icon="fa:hourglass-1" style={{ fontSize: "250%" }} />}
            />
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
};

export default experience;
