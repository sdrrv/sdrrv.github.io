import { motion } from "framer-motion";
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
    <motion.div className="timeline_icon">
      <motion.div
        className="timeline_icon_icon"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
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
