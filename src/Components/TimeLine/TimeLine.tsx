import React, { MutableRefObject } from "react";
import "./TimeLine.component.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from "react-vertical-timeline-component";
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
          My Time-Line <i className="bi bi-hourglass timeline-title-icon" />
        </h2>
        <div className="vl vl-first" />
      </section>
      <section>
        <p>Hello</p>
      </section>
      <section>
        <div className="vl vl-last" />
      </section>
    </>
  );
}

export default TimeLine;
