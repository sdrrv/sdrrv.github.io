import React, { MutableRefObject } from "react";
import "./TimeLine.component.scss";
import "react-vertical-timeline-component/style.min.css";
import ScrollToButton from "../ScrollToButton/ScrollToButton";
import TimeLineElement from "./TimeLineElement";
import TecnicoSVG from "../../assets/TecnicoSVG";

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
        <h2 className="timeline-title">
          Timeline <i className="bi bi-hourglass-split timeline-title-icon" />
        </h2>
        <div className="timeline">
          <TimeLineElement
            color="#589CDD"
            reversed={true}
            iconNode={<TecnicoSVG />}
            dateNode={
              <>
                Jul <b>2022</b>
              </>
            }
          >
            <h3> Instituto Superior Técnico </h3>
            <h4> Computer Science & Software Engineering</h4>
            <p>Will finish his degree 🎓 </p>
          </TimeLineElement>

          <TimeLineElement
            color="#B00052"
            iconNode={
              <svg viewBox=".002 -.001 553.999 332.001" className="sky-icon">
                <path d="M240.954 7.429c0-5.272-3.44-7.429-7.784-7.429h-27.39c-10.863 0-18.61 5.447-18.61 18.713v234.618c0 5.2 3.458 7.447 7.838 7.447h27.335c10.887 0 18.61-5.447 18.61-18.738V7.429zM554 86.568c0-4.398-3.248-6.573-7.688-6.573h-33.24c-6.657 0-9.61 2.35-12.08 7.742L454.136 191.75 388.79 88.827c-3.989-6.398-8.297-8.832-17.985-8.832h-39.5c-8.181 0-12.603 2.175-17.472 7.404l-69.57 74.74 62.37 90.958c3.622 5.224 6.634 7.676 12.069 7.676h37.192c5.567 0 8.808-2.241 8.808-6.916 0-2.832-1.362-4.688-3.241-7.333l-54.827-81.174 41.578-44.795 82.186 121.487-36.276 76.745c-.994 2.284-2.217 4.459-2.217 6.634 0 4.446 3.26 6.579 7.706 6.579h32.98c6.7 0 9.604-2.308 12.062-7.712L551.825 93.22c1.042-2.284 2.175-4.393 2.175-6.652M66.925 142.53c-10.923-2.458-14.315-5.549-14.315-11.055 0-4.284 3.392-7.7 13.249-7.7h79.746c13.29 0 18.659-7.76 18.659-18.6V87.8c0-4.374-2.187-7.809-7.417-7.809H63.443C21.816 79.991 0 104.121 0 134.806c0 27.335 16.78 43.97 50.369 51.441l53.591 11.99c10.9 2.41 14.28 5.543 14.28 11.116 0 4.223-3.38 7.64-13.19 7.64H21.908c-13.291 0-18.666 7.705-18.666 18.61v17.34c0 4.308 2.145 7.833 7.375 7.833h91.193c49.212 0 69.058-24.106 69.058-52.664 0-29.504-17.002-46.145-50.356-53.586L66.925 142.53z" />
              </svg>
            }
            dateNode={
              <>
                Jul - Sep <b>2021</b>
              </>
            }
          >
            <h3>
              Internship @ <a href="https://www.sky.com">Sky</a>
            </h3>
            <h4>Worked as developer during the summer</h4>
            <p>
              I build from ground-up an web application using <a>React</a> and{" "}
              <a>Ts</a>.
            </p>
          </TimeLineElement>
        </div>
        <div className="vl vl-first" />
      </section>
      <section>
        <div className="timeline">
          <TimeLineElement
            color="#589CDD"
            reversed={true}
            iconNode={<TecnicoSVG />}
            dateNode={
              <>
                Jul <b>2022</b>
              </>
            }
          >
            <h3> Instituto Superior Técnico </h3>
            <h4> Computer Science & Software Engineering</h4>
            <p>Will finish his degree 🎓 </p>
          </TimeLineElement>
          <TimeLineElement
            color="#589CDD"
            iconNode={<TecnicoSVG />}
            dateNode={
              <>
                Jul <b>2022</b>
              </>
            }
          >
            <h3> Instituto Superior Técnico </h3>
            <h4> Computer Science & Software Engineering</h4>
            <p>Will finish his degree 🎓 </p>
          </TimeLineElement>
          <TimeLineElement
            color="#589CDD"
            reversed={true}
            iconNode={<TecnicoSVG />}
            dateNode={
              <>
                Jul <b>2022</b>
              </>
            }
          >
            <h3> Instituto Superior Técnico </h3>
            <h4> Computer Science & Software Engineering</h4>
            <p>Will finish his degree 🎓 </p>
          </TimeLineElement>
        </div>
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
