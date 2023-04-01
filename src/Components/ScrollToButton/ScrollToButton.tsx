import React, { MutableRefObject } from "react";
import "./ScrollToButton.component.scss";
import Button from "../Button/Button";

type ScrollToButtonProps = {
  reference: MutableRefObject<unknown>;
  next: boolean; // True next, false previous
};

function ScrollToButton({ reference, next }: ScrollToButtonProps) {
  function handleGoNextPage() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reference.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Button
      buttonType="empty"
      className="go-down-arrow"
      animationProps={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 1.5,
            type: "tween",
          },
        },
      }}
      onClick={handleGoNextPage}
    >
      <i className="bi bi-arrow-down" />
    </Button>
  );
}

export default ScrollToButton;
