import React from "react";
import "./TimeLine.component.scss";

type TimeLineElementProps = {
  children?: React.ReactNode;
  reversed?: boolean;
  dateNode?: React.ReactNode;
  iconNode?: React.ReactNode;
};

function TimeLineElement({
  reversed,
  dateNode,
  children,
  iconNode,
}: TimeLineElementProps) {
  return (
    <div className="timeline_icon">
      {iconNode}
      <div className={"timeline_icon_date " + (reversed ? "left" : "right")}>
        {dateNode}
      </div>
      <div className={"timeline_icon_content " + (reversed ? "right" : "left")}>
        {children}
      </div>
    </div>
  );
}
export default TimeLineElement;
