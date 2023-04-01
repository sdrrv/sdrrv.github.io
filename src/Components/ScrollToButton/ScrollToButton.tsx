import React, { MutableRefObject } from "react";
import "./ScrollToButton.component.scss";
import Button from "../Button/Button";

type ScrollToButtonProps = {
  reference: MutableRefObject<unknown>;
  toPrevious?: boolean; // false next, true previous
  disabled?: boolean;
};

function ScrollToButton({
  reference,
  toPrevious = false,
  disabled = false,
}: ScrollToButtonProps) {
  function handleGoNextPage() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reference.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Button
      disabled={disabled}
      buttonType="empty"
      className={toPrevious ? "go-up-arrow" : "go-down-arrow"}
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
      <i className={toPrevious ? "bi bi-arrow-up" : "bi bi-arrow-down"} />
    </Button>
  );
}

export default ScrollToButton;
