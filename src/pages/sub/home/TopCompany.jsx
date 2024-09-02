import styled from "styled-components";
import { Title } from "../../../components/layout";
import { PicCards } from "../../../components/design";
import { useState } from "react";
import { useEffect } from "react";
import stacks from "../../../data/stacks.json"

export default function Skills() {
  const [nums, setNums] = useState(Math.floor(window.innerWidth / 120));

  const resize = () => {
    setNums(Math.floor(window.innerWidth / 120));
    return;
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return window.removeEventListener("resize", resize);
  });

  window.addEventListener("resize", resize);

  return (
    <div
      className="deed py-4 d-flex flex-column x10-gap w-100 overflow-hidden"
      id="Skills"
    >
      <Title>Core Technologies</Title>
      <div className="company-logos d-flex flex-column x0-gap ai-c w-100 position-relative">
        {[0].map((e) => {
          const stacky =
            e === 0 ? [...stacks, ...stacks] : [...stacks, ...stacks];
          return (
            <Groll key={e} className="inner w-100">
              <PicCards
                goTo
                animate
                num={nums}
                className="inn d-flex ai-c x10-gap w-100 custom-scroll-bar"
              >
                {stacky.map((stack, index) => {
                  return (
                    <div
                      className="Slogo wow zoomIn"
                      key={`${stack.key}-${index}`}
                      title={stack.value}
                    >
                      <img
                        src={stack.img}
                        className="contain"
                        alt={stack.value}
                      />
                    </div>
                  );
                })}
              </PicCards>
            </Groll>
          );
        })}
      </div>
    </div>
  );
}

const Groll = styled.div`
  & .inn {
    position: relative;
    /* top: 5px; */
    /* overflow: hidden; */
    width: 100%;
    justify-content: space-between;
    /* animation: scroll_left infinite 2s; */
    /* animation-play-state: paused; */
  }

  & .Slogo {
    min-width: 80px;
    width: calc(80px + 10vmin);
    max-width: 100px;
    min-height: 50px;
    height: calc(50px + 2vmin);
    max-height: 160px;
  }

  & .Slogo img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  & .inn:nth-child(2) .Slogo {
    animation-duration: 3s;
  }

  & .inn:nth-child(3) .Slogo {
    animation-duration: 2800ms;
  }

  @keyframes scroll_left {
    from {
      transform: translate(100%, 0);
    }

    to {
      transform: translate(0%, 0);
    }
  }
`;
