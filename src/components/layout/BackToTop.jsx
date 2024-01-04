import { useRef } from "react";
import styled from "styled-components";
import { ScrollTo } from "../../functions/ScrollTo";

const BackToTopS = styled.button`
  & {
    position: fixed;

    visibility: hidden;
    opacity: 0;

    right: 15px;
    bottom: 15px;
    z-index: 99999;
    width: 45px;
    height: 45px;
    border-radius: 4px;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

/* eslint-disable react/prop-types */
const BackToTop = () => {
  const toggleBacktotop = (value) => {
    if (value.current)
      if (window.scrollY > 100) {
        value.current.classList.add("active");
      } else {
        value.current.classList.remove("active");
      }
  };

  const back_to_top_btn = useRef();

  window.addEventListener("load", () => {
    toggleBacktotop(back_to_top_btn);
  });
  window.addEventListener("scroll", () => {
    toggleBacktotop(back_to_top_btn);
  });

  return (
    <BackToTopS
      ref={back_to_top_btn}
      className="bg-black text-light animated bounce"
      onClick={() => {
        ScrollTo("#App");
      }}
    >
      <i className="bi bi-arrow-up-short is-4"></i>
    </BackToTopS>
  );
};

export default BackToTop;
