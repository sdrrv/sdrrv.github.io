import React, { MutableRefObject } from "react";
import "./TimeLine.component.scss";
import "react-vertical-timeline-component/style.min.css";
import ScrollToButton from "../ScrollToButton/ScrollToButton";
import TimeLineElement from "./TimeLineElement";

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
          <TimeLineElement
            reversed={true}
            iconNode={<i className="bi bi-google" />}
            dateNode={
              <>
                Jul - Sep <b>2022</b>
              </>
            }
          >
            <h3> Star Wars Rules</h3>
            <p>Hello there general Knob</p>
          </TimeLineElement>

          <TimeLineElement
            iconNode={<i className="bi bi-google" />}
            dateNode={
              <>
                Jul - Sep <b>2022</b>
              </>
            }
          >
            <h3> Star Wars Rules</h3>
            <p>Hello there general Knob</p>
          </TimeLineElement>
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
