/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { ScreenO, ThemeWrappper } from "../../../../components/layout";
import { PicCards } from "../../../../components/design";
import { useState } from "react";
import stacks from "../../../../data/projects.json"

const [webDevelopment, programming] = ["web_development", "programming"];

// eslint-disable-next-line react/prop-types
const Stack = ({ stack }) => {
  return (
    <ThemeWrappper
      className={`rounded wow ${
        !stack ? `glow slower infinite` : "fadeIn faster"
      }`}
    >
      <Stacky>
        <div className="img w-100 h-100">
          <img src={stack && stack.image} alt={stack.name} />
        </div>
        <div className="descr w-100 h-100">
          <div className="inner custom-scroll-bar">
            {stack && (
              <>
                <h6 className="cap-txt m-0">{stack.name}</h6>
                <div
                  className="m-0 overflow-hidden"
                  style={{
                    maxHeight: "50px",
                  }}
                >
                  <p className="m-0">
                    {stack.description.length < 45
                      ? stack.description
                      : `${stack.description.split(0, 45)}...`}
                  </p>
                </div>
                <div className="link">
                  <span className="web-link d-flex justify-content-end">
                    <a
                      href={stack.link.host ? stack.link.host : stack.link.git}
                      target="_blank"
                      rel="noreferrer"
                      className="mod d-flex x5-gap ai-c"
                    >
                      <i className="bx bx-link"></i>
                      <span>Web Link</span>
                    </a>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </Stacky>
    </ThemeWrappper>
  );
};

const Projects = () => {
  const [select, setSelect] = useState(null);

  return (
    <div className="projects" id="Projects">
      <ScreenO className={""}>
        <Bret className="d-flex flex-column ai-c x30-gap justify-content-between bend-840 w-100 py-4">
          <div className="h d-flex flex-column w-100 x10-gap">
            <h4 className="m-0">Filter by:</h4>
            <div className="locates d-flex flex-wrap x20-gap ai-c user-select-none">
              <button
                name={`locator_btn_1`}
                className={`locate ${!select && "select"}`}
                onClick={() => {
                  setSelect(null);
                }}
              >
                <span>All</span>
                <span className="no">01</span>
              </button>
              <span className="sp">/</span>
              <button
                name={`locator_btn_2`}
                className={`locate ${select === webDevelopment && "select"}`}
                onClick={() => {
                  setSelect(webDevelopment);
                }}
              >
                <span>Web Development</span>
                <span className="no">02</span>
              </button>
              <span className="sp">/</span>
              <button
                name={`locator_btn_3`}
                className={`locate ${select === programming && "select"}`}
                onClick={() => {
                  setSelect(programming);
                }}
              >
                <span>Programming</span>
                <span className="no">03</span>
                <span className="sp"></span>
              </button>
            </div>
          </div>
          <div className="b h-100 w-100 p-2 d-flex flex-wrap justify-content-center x10-gap">
            <PicCards goTo disable>
              {!select
                ? stacks.map((stack) => {
                    return <Stack stack={stack} key={stack.key} />;
                  })
                : stacks
                    .filter((x) => x.dataType === select)
                    .map((stack) => {
                      return <Stack stack={stack} key={stack.key} />;
                    })}
            </PicCards>
          </div>
          <ThemeWrappper className={"p-2 px-3 rounded-3 mt-4"}>
            <span className="h5">
              And Many More projects I can{"'"}t disclose 🙂
            </span>
          </ThemeWrappper>
        </Bret>
      </ScreenO>
    </div>
  );
};

const Bret = styled.div`
  & .locates .locate {
    background-color: transparent;
    color: inherit;
    font-size: calc(100% + 0.75vmin);

    position: relative;
    display: flex;
    gap: 5px;
  }

  & .locates .locate.select,
  & .locates .locate:hover {
    color: #fff;
    font-weight: 900;
    letter-spacing: 2px;
    text-decoration: underline;
  }

  & .locates .locate .no {
    position: absolute;
    top: -6px;
    right: -17px;

    font-size: calc(70%);
    font-family: monospace;
  }

  & .b {
    width: 100%;
  }
`;

const Stacky = styled.div`
  width: calc(220px + 12.5vmin);
  min-width: 250px;
  max-width: 350px;

  height: calc(250px + 12.5vmin);
  min-height: 250px;
  max-height: 300px;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 0.6fr;

  & .img {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  & .img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* overflow: hidden; */
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;

    z-index: 90;
  }

  & .img:hover img {
    transition-property: object-fit scale;
    transition: 0.3s ease-in;
    transform: scale(1.2);
    cursor: pointer;
  }

  & .img::before {
    width: 100%;
    height: 100%;
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--sub);
    z-index: 100;
    opacity: 0.18;
  }

  & .descr {
    padding: 10px;
    overflow: hidden;
    max-height: 100px;
  }

  & .descr .inner {
    overflow: hidden auto;
  }
`;

export default Projects;
