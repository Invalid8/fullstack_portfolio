import { useState, useRef } from "react";
import styled from "styled-components";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// eslint-disable-next-line react/prop-types
const Triple = ({ children, num = 1 }) => {
  const comm = [];
  for (let i = 1; i < num + 1; i++) {
    comm.push(i);
  }

  const [list] = useState(comm);
  const lefts = list.filter((item) => item < Math.ceil(num / 2));
  const rights = list.filter((item) => item > Math.ceil(num / 2));

  const container = useRef();

  return (
    <Nim className="" ref={container}>
      {list.map((e) => {
        return (
          <div
            className={`big ${lefts.includes(e) && "box"} ${
              rights.includes(e) && "box0"
            }`}
            key={e}
          >
            <span>{children}</span>
          </div>
        );
      })}
    </Nim>
  );
};

const Nim = styled.div`
  & {
  }

  & .big {
    margin: 0 auto;
    max-width: fit-content;
    /* animation: change 2s infinite;
    transition: 0.6s ease-in;
    animation-play-state: paused;
    animation-timing-function: 0.6s ease-in; */
  }

  & .big > span {
    line-height: 1em;
  }

  @keyframes change {
    0% {
      background-image: url("/assets/image/coded.png");
    }

    50% {
      background-image: linear-gradient(45deg, #271562, #000000);
    }

    100% {
      background-image: url("/assets/image/shark.jpg");
    }
  }
`;

export default Triple;
