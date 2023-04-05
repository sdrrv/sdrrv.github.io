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
            color="#5A2889"
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
            reversed={true}
            color="#AE2854"
            iconNode={
              <svg
                className="raspberry-icon"
                width="800px"
                height="800px"
                viewBox="0 0 32 32"
              >
                <path d="M 24.398438 14.800781 L 24.199219 14.5 C 24.199219 12.101563 23.101563 11.199219 21.898438 10.5 C 22.300781 10.398438 22.699219 10.300781 22.800781 9.800781 C 23.5 9.601563 23.601563 9.300781 23.699219 9 C 23.898438 8.898438 24.398438 8.601563 24.398438 8 C 24.699219 7.800781 24.898438 7.5 24.800781 7.101563 C 25.101563 6.699219 25.199219 6.398438 25.101563 6.101563 C 25.5 5.601563 25.300781 5.300781 25.199219 5 C 25.5 4.398438 25.199219 3.800781 24.398438 3.898438 C 24.101563 3.398438 23.300781 3.5 23.199219 3.5 C 23.101563 3.300781 22.898438 3.199219 22.398438 3.300781 C 21.898438 3 21.5 3 21.101563 3.199219 C 20.601563 2.800781 20.300781 3.101563 20 3.199219 C 19.398438 3 19.300781 3.300781 19 3.398438 C 18.398438 3.300781 18.199219 3.601563 17.898438 3.898438 L 17.601563 3.898438 C 16.699219 4.398438 16.199219 5.601563 16 6.101563 C 15.800781 5.5 15.398438 4.398438 14.398438 3.898438 L 14.101563 3.898438 C 13.800781 3.601563 13.601563 3.300781 13 3.398438 C 12.699219 3.300781 12.601563 3 12 3.199219 C 11.800781 3.101563 11.601563 3 11.300781 3 C 11.199219 3 11.101563 3.101563 10.898438 3.199219 C 10.5 3 10.101563 3 9.800781 3.300781 C 9.300781 3.199219 9.101563 3.398438 9 3.5 C 8.898438 3.5 8.101563 3.398438 7.800781 3.898438 C 6.898438 3.800781 6.601563 4.398438 6.898438 5 C 6.699219 5.300781 6.601563 5.5 7 6.101563 C 6.800781 6.300781 6.898438 6.699219 7.300781 7 C 7.199219 7.398438 7.300781 7.699219 7.699219 8 C 7.601563 8.5 8.199219 8.800781 8.300781 9 C 8.398438 9.300781 8.5 9.601563 9.199219 9.800781 C 9.300781 10.300781 9.699219 10.398438 10.101563 10.5 C 8.800781 11.199219 7.800781 12.199219 7.800781 14.5 L 7.601563 14.800781 C 6.199219 15.699219 4.898438 18.5 6.898438 20.800781 C 7 21.5 7.199219 22 7.398438 22.601563 C 7.699219 24.898438 9.601563 26 10.101563 26.101563 C 10.800781 26.699219 11.601563 27.199219 12.699219 27.601563 C 13.699219 28.601563 14.800781 29 15.898438 29 C 17 29 18.101563 28.601563 19.101563 27.601563 C 20.199219 27.199219 21 26.699219 21.699219 26.101563 C 22.199219 26 24.101563 24.898438 24.398438 22.601563 C 24.601563 22 24.800781 21.5 25 20.800781 C 27.199219 18.5 25.898438 15.699219 24.398438 14.800781 Z M 23.101563 14.398438 C 23 15.398438 18.199219 11.101563 19 11 C 21.300781 10.601563 23.199219 11.898438 23.101563 14.398438 Z M 17.800781 4.5 C 17.800781 4.699219 17.898438 4.800781 17.898438 4.898438 C 18.199219 4.601563 18.398438 4.300781 18.699219 4 C 18.699219 4.199219 18.601563 4.300781 18.800781 4.5 C 19 4.199219 19.199219 4 19.601563 3.800781 C 19.398438 4.101563 19.601563 4.199219 19.699219 4.300781 C 20 4.101563 20.199219 3.898438 20.699219 3.699219 C 20.601563 3.898438 20.398438 4 20.601563 4.199219 C 20.898438 4 21.101563 3.898438 21.800781 3.699219 C 21.699219 3.898438 21.398438 4 21.5 4.199219 C 21.800781 4.101563 22.199219 4 22.601563 3.898438 C 22.398438 4.101563 22.199219 4.199219 22.398438 4.300781 C 22.800781 4.199219 23.199219 4 23.699219 4.199219 L 23.398438 4.5 C 23.398438 4.5 24.101563 4.5 24.601563 4.5 C 24.398438 4.800781 24.199219 5 24.101563 5.398438 C 24.101563 5.398438 24.398438 5.398438 24.601563 5.398438 C 24.398438 6 24 6.101563 23.898438 6.300781 C 24 6.398438 24.199219 6.398438 24.5 6.300781 C 24.300781 6.699219 24 6.898438 23.699219 7.199219 C 23.800781 7.300781 23.898438 7.300781 24.199219 7.199219 C 23.898438 7.5 23.601563 7.699219 23.300781 8 C 23.398438 8.101563 23.601563 8.101563 23.800781 8.101563 C 23.5 8.398438 23 8.601563 22.601563 8.800781 C 22.699219 9 22.898438 8.898438 23 8.898438 C 22.699219 9.101563 22.199219 9.300781 21.800781 9.398438 C 21.898438 9.5 22 9.601563 22.199219 9.601563 C 21.699219 9.898438 21 9.699219 20.800781 9.898438 C 20.800781 10 21 10.101563 21.101563 10.199219 C 20.300781 10.199219 18.199219 10.199219 17.800781 8.601563 C 18.601563 7.699219 20 6.699219 22.5 5.398438 C 20.601563 6.101563 18.800781 6.898438 17.398438 8.101563 C 15.800781 7.300781 16.898438 5.300781 17.800781 4.5 Z M 16 10.300781 C 17.199219 10.300781 18.699219 11.199219 18.699219 12.101563 C 18.699219 12.898438 17.601563 13.5 16 13.5 C 14.398438 13.5 13.300781 12.699219 13.300781 12 C 13.300781 11.300781 14.601563 10.300781 16 10.300781 Z M 9.898438 9.699219 C 10.101563 9.699219 10.199219 9.601563 10.300781 9.5 C 9.800781 9.300781 9.300781 9.199219 9 8.898438 C 9.199219 8.898438 9.300781 8.898438 9.5 8.800781 C 9.101563 8.601563 8.699219 8.398438 8.300781 8.101563 C 8.5 8.101563 8.699219 8.101563 8.800781 8 C 8.5 7.800781 8.199219 7.5 7.898438 7.300781 C 8.199219 7.300781 8.300781 7.300781 8.398438 7.300781 C 8.101563 6.898438 7.800781 6.699219 7.601563 6.300781 C 7.800781 6.398438 8 6.398438 8.199219 6.300781 C 8.101563 6.101563 7.601563 6 7.398438 5.5 C 7.601563 5.5 7.898438 5.5 7.898438 5.5 C 7.800781 5.101563 7.601563 4.800781 7.5 4.601563 C 8 4.601563 8.699219 4.601563 8.699219 4.601563 L 8.398438 4.199219 C 8.898438 4.101563 9.398438 4.199219 9.699219 4.300781 C 9.898438 4.199219 9.699219 4 9.5 3.898438 C 9.898438 4 10.300781 4.101563 10.601563 4.199219 C 10.800781 4 10.5 3.898438 10.300781 3.699219 C 11 3.800781 11.199219 4 11.5 4.199219 C 11.699219 4 11.5 3.898438 11.398438 3.699219 C 11.898438 3.898438 12.101563 4.101563 12.398438 4.300781 C 12.5 4.199219 12.601563 4.101563 12.5 3.800781 C 12.699219 4 13 4.199219 13.199219 4.5 C 13.398438 4.398438 13.300781 4.199219 13.300781 4 C 13.601563 4.300781 13.898438 4.601563 14.101563 4.898438 C 14.199219 4.898438 14.199219 4.699219 14.199219 4.5 C 15 5.300781 16.199219 7.300781 14.5 8.101563 C 13.101563 6.898438 11.300781 6 9.398438 5.398438 C 11.898438 6.699219 13.300781 7.699219 14.101563 8.601563 C 13.699219 10.199219 11.601563 10.300781 10.800781 10.199219 C 11 10.101563 11.101563 10 11.101563 9.898438 C 11 9.800781 10.398438 9.898438 9.898438 9.699219 Z M 12.699219 10.898438 C 13.5 11 8.699219 15.300781 8.601563 14.300781 C 8.5 11.898438 10.398438 10.5 12.699219 10.898438 Z M 7.601563 20.398438 C 6.398438 19.398438 6 16.699219 8.199219 15.398438 C 9.5 15 8.699219 20.800781 7.601563 20.398438 Z M 12.199219 25.398438 C 11.5 25.800781 9.898438 25.601563 8.800781 24 C 8 22.601563 8.101563 21.199219 8.699219 20.800781 C 9.5 20.300781 10.800781 21 11.699219 22.101563 C 12.5 23 12.898438 24.800781 12.199219 25.398438 Z M 10.898438 19.300781 C 9.699219 18.5 9.5 16.699219 10.398438 15.199219 C 11.398438 13.800781 13.101563 13.199219 14.300781 14 C 15.5 14.800781 15.699219 16.601563 14.800781 18.101563 C 13.898438 19.601563 12.101563 20.101563 10.898438 19.300781 Z M 16 28.199219 C 14.5 28.300781 13.101563 27 13.101563 26.601563 C 13.101563 26 14.898438 25.5 16.101563 25.5 C 17.300781 25.398438 18.898438 25.898438 18.898438 26.5 C 18.898438 26.898438 17.398438 28.199219 16 28.199219 Z M 19 21.800781 C 19 23.300781 17.699219 24.5 16.101563 24.5 C 14.5 24.5 13.101563 23.300781 13.101563 21.800781 C 13.101563 20.300781 14.398438 19.101563 16 19.101563 C 17.699219 19.101563 19 20.300781 19 21.800781 Z M 17.199219 18 C 16.199219 16.601563 16.5 14.699219 17.699219 13.898438 C 18.898438 13.101563 20.699219 13.601563 21.601563 15.101563 C 22.5 16.601563 22.300781 18.398438 21.101563 19.199219 C 19.898438 19.898438 18.101563 19.398438 17.199219 18 Z M 23.199219 24 C 21.898438 25.800781 20.199219 25.800781 19.601563 25.300781 C 18.898438 24.699219 19.398438 22.699219 20.398438 21.601563 C 21.398438 20.398438 22.601563 19.601563 23.300781 20.199219 C 23.800781 20.898438 24.101563 22.800781 23.199219 24 Z M 24.101563 20.300781 C 23 20.800781 22.101563 15 23.5 15.300781 C 25.699219 16.5 25.300781 19.300781 24.101563 20.300781 Z" />
              </svg>
            }
            dateNode={
              <>
                Jun <b>2021</b> - <b>now</b>
              </>
            }
          >
            <h3> Home server </h3>
            <h4>
              Created a home server using a <a>raspberryPi</a>
            </h4>
            <p>
              As of right now, my raspberry is hosting all my webApps, including
              this site, all my projects, and my email server <a>@elvas.me</a>.
            </p>
          </TimeLineElement>
          <TimeLineElement
            color="#6B72F3"
            iconNode={<i className="bi bi-discord discord-icon" />}
            dateNode={
              <>
                Jan <b>2021</b>
              </>
            }
          >
            <h3> Discord Bot </h3>
            <h4>
              Developed a Discord Bot using <a>Python</a>
            </h4>
            <p>
              Coded an{" "}
              <a href="https://github.com/sdrrv/Fate-Wielding-Bot">
                open-source
              </a>{" "}
              discord bot, that is in 500+ servers and counting!
            </p>
          </TimeLineElement>
          <TimeLineElement
            reversed={true}
            color="#D87868"
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
        </div>
        <div className="vl" />
      </section>
      <section>
        <div className="timeline last">
          <TimeLineElement
            color="#008B79"
            iconNode={<i className="bi bi-google-play discord-icon" />}
            dateNode={<b>2018</b>}
          >
            <h3> Apps for Good </h3>
            <h4>
              Was a finalist at the competition{" "}
              <a href="https://www.appsforgood.org/">Apps for Good</a>
            </h4>
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
