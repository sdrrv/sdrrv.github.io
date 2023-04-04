import React, { MutableRefObject } from "react";
import "./TimeLine.component.scss";
import "react-vertical-timeline-component/style.min.css";
import ScrollToButton from "../ScrollToButton/ScrollToButton";

type TimeLineProps = {
  selfReference: MutableRefObject<null>;
  previousReference: MutableRefObject<null>;
  nextReference: MutableRefObject<null>;
};

function TimeLine({
  selfReference,
  previousReference,
  nextReference,
}: TimeLineProps) {
  return (
    <>
      <section ref={selfReference} className="test">
        <ScrollToButton reference={previousReference} toPrevious={true} />
        <h2 className="timeline-title">
          Timeline <i className="bi bi-hourglass-split timeline-title-icon" />
        </h2>
        <div className="timeline">
          <div className="timeline_icon">
            <i className="bi bi-google" />
            <div className="timeline_icon_date left">April 2020</div>
          </div>
          <div className="timeline_icon">
            <i className="bi bi-google" />
          </div>
        </div>
        <div className="vl vl-first" />
      </section>
      <section>
        <div className="vl" />
      </section>
      <section>
        <div className="vl vl-last" />
        <ScrollToButton reference={nextReference} disabled={true} />
      </section>
    </>
  );
}

export default TimeLine;
