import styled from "styled-components";
import { ThemeWrappper } from "../layout";

// eslint-disable-next-line react/prop-types
const Dust = ({ children, className, fixed }) => {
  return (
    <Dusty
      className={`${className} w-100 h-100 ${
        fixed ? "position-fixed" : "position-relative"
      }`}
    >
      <ThemeWrappper>
        {/* <div className="moon"></div> */}
        {/* <div className="sun"></div> */}
        <div className="stars"></div>
        {children}
      </ThemeWrappper>
    </Dusty>
  );
};

const Dusty = styled.div`
  min-height: 100svh;
  min-width: 100svw;
  top: 0;
  background-color: #000000a4;

  & *::before,
  & *::after {
    position: absolute;
    content: "";
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    background-repeat: no-repeat;
    background-attachment: fixed;

    transition-property: background-size, background-color, transform, opacity;
    transition: 0.3s ease-in-out;
    transform-origin: 0 0;
    transform-box: border-box;
    transform-style: preserve-3d;
  }

  & .stars {
    background-color: inherit;
  }

  & .stars::before {
    background-image: url("/assets/image/Landscape.jpg");
    background-color: transparent;
    background-position: center;
    background-size: cover;
    animation: float 3000ms 2 forwards alternate;
    background-blend-mode: overlay;

    z-index: -1000;
    /* opacity: 0.6; */
  }

  & .light .stars::before {
    background-color: #000000b9;
  }

  & .dark .stars::after {
    background-color: inherit;
    opacity: 0.95;
    background-position: center;
    background-size: cover;
    /* opacity: 0.6; */
  }

  & .moon::after,
  & .sun::after {
    animation: alternate;
    animation-name: moon;
    animation-fill-mode: steps(3);
    animation-duration: 3s;
    animation-iteration-count: 1;
    background-size: calc(5em + 10vmin);

    background-position: center;
    transform: translate(7em, -5em) scale(0.4);
    transform-origin: 100% 0;

    z-index: 1000;
  }

  & .moon::after {
    background-image: url("/assets/image/the-moon.svg");
  }

  & .sun::after {
    background-image: url("/assets/image/sun.svg");
  }

  @keyframes float {
    to {
      background-position: 100% 100%;
    }
  }

  @keyframes moon {
    from {
      transform: skew(0deg) rotate(0deg) scale(1);
      /* rotate: -360deg; */
      transform-origin: center;
    }

    to {
      transform: translate(6em, -7.5em) scale(0.4);
      transform-origin: 100% 0;
    }
  }
`;

export default Dust;
