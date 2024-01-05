/* eslint-disable react/prop-types */
import { useState, Children, useEffect } from "react";
import { Goto, Pics } from "./style";
import { useRef } from "react";

function breaks(list, no) {
  const breaks = [];

  for (let i = 0; i < list.length - (no - 1); i++) {
    const inn = [];
    let x = i;
    while (inn.length < no) {
      inn.push(list[x]);
      x += 1;
    }

    breaks.push(inn);
  }

  return breaks;
}

const PicCards = ({
  images = [],
  stacks = false,
  arrowControl = false,
  goTo = false,
  children,
  className = "",
  style = {},
  disable = false,
  num = 1,
  animate = false,
  time = 1500,
}) => {
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param images Map of name to a ReactPropType
   * @param stacks Runtime values that need to be type-checked
   * @param arrowControl e.g. "prop", "context", "child context"
   * @param goTo Name of the component for error messages
   * @param children Returns the component stack
   */

  const [PREV, NEXT] = ["PREV", "NEXT"];
  let list = [];
  Children.forEach(children, (child, index) => {
    list.push({ ...child, id: index + images.length, isChild: true });
  });

  const IMGS = [
    ...images.map((i) => {
      i.isChild = false;
      return i;
    }),
    ...list,
  ];

  const gotos = IMGS.map((e) => {
    let a = e.id;
    return a;
  });

  const [folds, setFolds] = useState(breaks(gotos, num));
  const [selectedImgID, setSelectedImgID] = useState(folds[0]);
  const container = useRef();

  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        GoTo(selectedImgID, NEXT);
        setTimeout(() => {}, 100);
      }, time);

      return () => clearInterval(interval);
    }
  });

  const GoTo = (ID, control = "NULL") => {
    if (!ID) {
      console.log("parameter missing ");
      setSelectedImgID(folds[0]);
      return false;
    }

    const imgID = folds.findIndex(
      (i) => JSON.stringify(i) === JSON.stringify(ID)
    );

    if (imgID === -1) {
      console.log("out of range");
      setSelectedImgID(folds[0]);
      return;
    }

    switch (control) {
      case PREV:
        var prev = imgID - 1;
        if (folds[prev]) setSelectedImgID(folds[prev]);

        return true;
      case NEXT:
        var next = imgID + 1;
        if (folds[next]) setSelectedImgID(folds[next]);
        else setSelectedImgID(folds[0]);

        return true;

      default:
        setSelectedImgID(ID);
        return true;
    }
  };

  useEffect(() => {
    setFolds(breaks(gotos, num));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  if (disable) return <>{children}</>;

  return (
    <div className="d-flex flex-column ai-c jc-c w-100 darkt">
      <Pics
        className={`${
          IMGS && IMGS.length === 0 && "none"
        } ${className} wow wow`}
        style={style}
        ref={container}
      >
        {IMGS &&
          IMGS.map((e, index) => {
            return e.isChild ? (
              <div
                className={`store wow wow ${
                  selectedImgID && selectedImgID.includes(e.id)
                    ? "show"
                    : "hide"
                }`}
                key={e.id}
              >
                {e}
              </div>
            ) : (
              <img
                src={e.img}
                alt="..."
                className={`image-photo ${
                  selectedImgID && selectedImgID.includes(e.id)
                    ? "show default"
                    : "slide-in"
                }`}
                key={`image${index}`}
              />
            );
          })}

        {IMGS && arrowControl && (
          <div className="arrow-controls">
            <button
              className="is-2 prev"
              name="previous"
              onClick={() => {
                GoTo(selectedImgID, PREV);
              }}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="is-2 next"
              name="next"
              onClick={() => {
                GoTo(selectedImgID, NEXT);
              }}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        )}

        {stacks && (
          <div className="stacks">
            <div className="stack-ed"></div>
          </div>
        )}
      </Pics>
      {goTo && (
        <Goto className="go-to">
          {folds.map((e, index) => {
            return (
              <button
                name={`goto${index}`}
                className={`dot ${
                  JSON.stringify(e) === JSON.stringify(selectedImgID) &&
                  "clicked"
                }`}
                key={`button${index}`}
                onClick={() => {
                  GoTo(e);
                }}
              >
                {JSON.stringify(e) === JSON.stringify(selectedImgID) && (
                  <span className="clicked"></span>
                )}
              </button>
            );
          })}
        </Goto>
      )}
    </div>
  );
};

export default PicCards;
