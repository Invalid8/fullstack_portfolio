/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { ScreenO } from "../../../components/layout";
import { Triple } from "../../../components/design";
import { useEffect, useRef } from "react";

const time = 180;
const blink = '<span className="blink"></span>';

const Landing = () => {
  const naming = useRef();
  const val = useRef(false);
  const name = "fadamitan daniel";

  useEffect(() => {
    const nameBlock = name.split("");
    const len = name.length;
    let write, rewrite;
    let i = 0;
    let j = len;

    if (i > len) {
      return clearInterval(write);
    }

    write = setInterval(() => {
      if (naming.current) {
        naming.current.innerHTML = "".concat(
          nameBlock.slice(0, i).join(""),
          blink
        );
        i += 1;
      }
    }, time);

    // rewrite = setInterval(() => {
    //   naming.current.innerHTML = "".concat(
    //     nameBlock.slice(0, j).join(""),
    //     blink
    //   );
    //   j -= 1;
    // }, time);

    // return clearInterval(write), clearInterval(rewrite);
  });

  return (
    <div className={`landing relative-positon`} id="Home">
      <ScreenO className={"centerize"}>
        <div className="front overflow-hidden" id="Front">
          <div className="boxy h-full">
            <Naming id="trip">
              <Triple num={1}>
                <span className="name" ref={val} data-reverse={false}>
                  <h1 className="upp-txt big bg-dangers" ref={naming}></h1>
                </span>
              </Triple>
              <div className="hit wow slideInUp">
                <h3 className="upp-txt">Fullstack JavaScript Web Developer</h3>
                <h3 className="upp-txt">Junior Software Enginner</h3>
              </div>
            </Naming>
          </div>
        </div>
      </ScreenO>
    </div>
  );
};
const Naming = styled.span`
  & {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.75em;
  }

  & * {
    margin: 0;
    padding: 0;
  }

  & .name {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    gap: calc(5px + 0.5em);
  }

  & h3 {
    font-size: calc(100% + 1.5vmin);
  }

  & > p {
    font-weight: 600;
    font-size: calc(100% + 0.5vmin);
  }

  & .line {
    margin: 0 auto;
    position: relative;
    height: 20px;
    width: calc(150px + 10vmin);
    margin-top: 0.5%;

    rotate: -180deg;
  }

  & .line::before,
  & .line::after {
    position: absolute;
    content: "";
    top: 50%;
    /* right: 50%;*/
    translate: 0 -50%;
    background-image: linear-gradient(45deg, #271562, #ffffff);
  }

  & .line::before {
    max-width: 270px;
    width: calc(100% - 40px);
    height: 4px;
    border-radius: 8px;
    right: 0;
  }

  & .line::after {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    left: 0;
    background-color: #271562;
  }

  & .big {
    font-size: calc(4.5rem);
    font-weight: bold;
    line-height: 0.95em;
  }

  @media (min-width: 1080px) {
    & .big {
      font-size: calc(6.2rem);
    }
  }

  @media (max-width: 840px) {
    & .big {
      font-size: calc(4.1rem);
    }
  }

  @media (max-width: 540px) {
    & .big {
      font-size: calc(3.2rem);
    }

    & h3 {
      font-size: calc(100% + 0.5vmin);
    }

    & > p {
      font-size: calc(100% + 0.025vmin);
    }
  }
`;

export default Landing;
