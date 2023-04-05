import { motion } from "framer-motion";
import React, { CSSProperties } from "react";
import "./TimeLine.component.scss";

type TimeLineElementProps = {
  children?: React.ReactNode;
  reversed?: boolean;
  dateNode?: React.ReactNode;
  iconNode?: React.ReactNode;
  color?: string;
};

function TimeLineElement({
  reversed,
  dateNode,
  children,
  iconNode,
  color,
}: TimeLineElementProps) {
  return (
    <motion.div className="timeline_icon">
      <motion.div
        className="timeline_icon_icon"
        style={{ backgroundColor: color ? color : "darkslateblue" }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.1 }}
      >
        {iconNode}
      </motion.div>
      <div className={"timeline_icon_date " + (reversed ? "left" : "right")}>
        {dateNode}
      </div>
      <div className={"timeline_icon_content " + (reversed ? "right" : "left")}>
        {children}
      </div>
    </motion.div>
  );
}
export default TimeLineElement;
