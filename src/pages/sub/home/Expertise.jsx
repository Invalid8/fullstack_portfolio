/* eslint-disable react/prop-types */
import { ThemeWrappper, Title } from "../../../components/layout";
import { useState } from "react";
import { Expert, Stacks } from "./style";
import { PicCards } from "../../../components/design";

const roles = [
  {
    id: "1321",
    icon: "bx bx-code-alt",
    role: "frontend developement",
    description: `Over 4 years of development with various frontend technologies such as HTML, CSS, JS, React, e.t.c.`,
    stacks: [
      // {
      //   id: 1,
      //   name: "HTML",
      //   show: {
      //     img: "",
      //     icon: "bx bxl-html5 brown-c",
      //   },
      //   link: "",
      // },
      // {
      //   id: 2,
      //   name: "react",
      //   show: {
      //     img: "",
      //     icon: "bx bxl-react blue-c",
      //   },
      //   link: "",
      // },
      // {
      //   id: 3,
      //   name: "tailwind",
      //   show: {
      //     img: "",
      //     icon: "bx bxl-tailwind-css navyblue-c",
      //   },
      //   link: "",
      // },
    ],
    type: "front",
  },
  {
    id: "3245",
    icon: "bx bx-code-curly",
    role: "backend developement",
    description: `Skilled in developing backend code that performs various functions such as authentication, authorization and db management systems and many more.`,
    stacks: [
      // {
      //   id: 1,
      //   name: "NodeJs",
      //   show: {
      //     img: "",
      //     icon: "bx bxl-nodejs green-c",
      //   },
      //   link: "",
      // },
      // {
      //   id: 2,
      //   name: "react",
      //   show: {
      //     img: "",
      //     icon: "bx bxl-react blue-c",
      //   },
      //   link: "",
      // },
    ],
    type: "back",
  },
  {
    id: "5335",
    icon: "bx bx-chip",
    role: "software development",
    description: `Currently on my path in becoming a software engineer that can work with and create system architecture and design.`,
    stacks: [
      // {
      //   id: 2,
      //   name: "python",
      //   show: {
      //     img: "",
      //     icon: "bx bxl-python yellow-c",
      //   },
      //   link: "",
      // },
    ],
    type: "front",
  },
];

const Expertise = () => {
  const [viewID, setViewID] = useState(undefined);

  return (
    <div
      className="w-full expertise relative-positon custom-scroll-bar"
      id="Expertise"
    >
      <div className="centerize p-4">
        <div className="inner py-4 d-flex x5-gap flex-column">
          <Title>My Expertise</Title>
          <div className="nooby d-flex flex-column ai-c jc-c">
            <div className="roles d-flex flex-wrap bend-840 w-100 x10-gap ai-c align-content-cente jc-c">
              <PicCards
                goTo
                num={3}
                disable
                className="roles d-flex flex-wrap bend-840 w-100 x10-gap ai-c align-content-cente jc-c"
              >
                {roles.map((r, index) => {
                  return (
                    <ExpertModal
                      key={index}
                      r={r}
                      viewID={viewID}
                      setViewID={setViewID}
                    />
                  );
                })}
              </PicCards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpertModal = ({ r, viewID, setViewID }) => {
  return (
    <ThemeWrappper className="rounded">
      <Expert
        onMouseOver={() => {
          setViewID(r.id);
        }}
        onMouseLeave={() => {
          setViewID(null);
        }}
      >
        <div className="inn">
          <div className="h-title">
            <div className="icon-t">
              <i className={`${r.icon}`}></i>
            </div>
            <div className="role">{r.role}</div>
          </div>
          <div className={`b-descr ${r.type}`}>
            <p>{r.description}</p>
            <div className={`unveil`}></div>
          </div>
        </div>
        {
          <Stacks className={viewID !== r.id ? "hidden" : "custom-scroll-bar"}>
            {[...r.stacks].map((stack, index) => {
              return (
                <div className="stack" key={index} title={stack.name}>
                  <i className={`${stack.show.icon}`}></i>
                </div>
              );
            })}
          </Stacks>
        }
      </Expert>
    </ThemeWrappper>
  );
};

export default Expertise;
