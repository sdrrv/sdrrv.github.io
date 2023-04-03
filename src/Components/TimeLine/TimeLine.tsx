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
      <section ref={selfReference}>
        <ScrollToButton reference={previousReference} toPrevious={true} />
        <div className="vl vl-first" />
      </section>
      <section>
        <div className="vl" />
      </section>
      <section>
        <div className="vl vl-last" />
      </section>
    </>
  );
}

export default TimeLine;
