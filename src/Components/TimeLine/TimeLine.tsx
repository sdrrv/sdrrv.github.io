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
            color="#D87868"
            reversed={true}
            iconNode={<div className="gympass-icon">G</div>}
            dateNode={
              <>
                Jul - Sep <b>2020</b>
              </>
            }
          >
            <h3>
              Internship @ <a href="https://www.gympass.com">Gympass</a>
            </h3>
            <h4>Worked as developer during the summer</h4>
            <p>
              I coded an open-source{" "}
              <a href="https://github.com/sdrrv/elasticsearch-rescore-redis">
                plugin
              </a>{" "}
              using <a>Java</a> that improved the search results of the Gympass
              app by personalizing them to each user.
            </p>
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
        <div className="timeline last">
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
            color="#D7BA00"
            reversed={true}
            iconNode={
              <svg
                className="python-icon"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <path
                  d="M314,36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09,311.09,0,0,0-51.66,4.38c-45.74,8-54.07,24.7-54.07,55.54V128H256v16H107.62C66.06,144,32.33,193.67,32,255.12c0,.29,0,.58,0,.88a162.91,162.91,0,0,0,3.13,32c9.29,46.28,38.23,80,72.49,80H128V314c0-31.3,20.84-59.95,55-66.1l9.87-1.23H314a56.05,56.05,0,0,0,15.06-2A52.48,52.48,0,0,0,368,193.68V91.92C368,63,343.32,41.19,314,36.38ZM194.93,105.5a20.37,20.37,0,1,1,20.3-20.3A20.29,20.29,0,0,1,194.93,105.5Z"
                  fill="white"
                />
                <path
                  d="M475.28,217c-10.7-42.61-38.41-73-70.9-73H386.67v47.45c0,39.57-26,68.22-57.74,73.13a63.54,63.54,0,0,1-9.69.75H198.08a60,60,0,0,0-15.23,1.95C160.54,273.14,144,291.7,144,315.77V417.54c0,29,29.14,46,57.73,54.31,34.21,9.95,71.48,11.75,112.42,0,27.19-7.77,53.85-23.48,53.85-54.31V384H256V368H404.38c29.44,0,54.95-24.93,67.45-61.31A156.83,156.83,0,0,0,480,256,160.64,160.64,0,0,0,475.28,217ZM316.51,404a20.37,20.37,0,1,1-20.3,20.3A20.29,20.29,0,0,1,316.51,404Z"
                  fill="white"
                />
              </svg>
            }
            dateNode={
              <>
                <b>2011</b> - <b>Forever</b>
              </>
            }
          >
            <h3> How it all started... </h3>
            <p>
              I developed an interest in coding when i was 11y, and soon began
              experimenting with <a>Python</a> to create small programs and
              games.
            </p>
            <p>
              This early exposure to programming sparked my passion for
              technology, and I have been coding ever since.
            </p>
          </TimeLineElement>
        </div>
        <div className="vl vl-last" />
        <ScrollToButton reference={nextReference} disabled={true} />
      </section>
    </>
  );
}

export default TimeLine;
