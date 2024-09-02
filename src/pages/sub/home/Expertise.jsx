/* eslint-disable react/prop-types */
import { ThemeWrappper, Title } from "../../../components/layout";
import { useState } from "react";
import { Expert, Stacks } from "./style";
import { PicCards } from "../../../components/design";
import roles from "../../../data/expertise.json";

const Expertise = () => {
  const [viewID, setViewID] = useState(undefined);

  return (
    <div
      className="w-100 expertise relative-positon custom-scroll-bar"
      id="Expertise"
    >
      <div className="centerize">
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
    <ThemeWrappper className="rounded wow zoomIn">
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
