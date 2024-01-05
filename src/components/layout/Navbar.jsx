import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useEffect, useRef, useState } from "react";
import ThemeWrappper from "./ThemeWrapper";
import { Header } from "./style";
import { Equalize, ScrollTo } from "../../functions/ScrollTo";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { day, night } from "../../data/ThemeConstants";
import Socials from "./Socials";

const def = [
  {
    id: 1,
    route: "home",
    hash: "#Home",
    dropdown: false,
  },
  {
    id: 2,
    route: "About",
    hash: "#About",
    dropdown: false,
  },
  {
    id: 3,
    route: "Expertise",
    hash: "#Expertise",
    dropdown: false,
  },
  {
    id: 4,
    route: "Skills",
    hash: "#Skills",
    dropdown: false,
  },
  {
    id: 5,
    route: "Work",
    hash: "#",
    dropdown: true,
    sub: [
      {
        id: 1,
        route: "Featured",
        hash: "#Featured",
        dropdown: false,
      },
      {
        id: 2,
        route: "Projects",
        hash: "#Projects",
        dropdown: false,
      },
    ],
  },
  {
    id: 6,
    route: "Experience",
    hash: "#Experience",
    dropdown: false,
  },
  {
    id: 7,
    route: "Contact",
    hash: "#Contact",
    dropdown: false,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [c, setC] = useState(null);
  const nana = useRef();

  useEffect(() => {
    if (!open) enableBodyScroll(document.body);
    else disableBodyScroll(document.body);

    // return disableBodyScroll(document.body);
  });

  const disability = (e) => {
    setOpen(false);
    enableBodyScroll(document.body);
    ScrollTo(`${e.currentTarget.hash}`);
  };

  useEffect(() => {
    const nana_childs = document.querySelectorAll(".scrollto");

    window.addEventListener("load", () => {
      Equalize(nana_childs, setC);
    });
    window.addEventListener("scroll", () => {
      Equalize(nana_childs, setC);
    });

    return () => {
      window.removeEventListener("load", () => {
        Equalize(nana_childs, setC);
      });
      window.removeEventListener("scroll", () => {
        Equalize(nana_childs, setC);
      });
    };
  });

  return (
    <ThemeWrappper
      className={"fixed-top d-flex align-items-center w-100 hide-image"}
    >
      <Header className="d-flex align-items-center w-100">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo d-flex ai-c x5-gap">
            <a href="/">
              <div className="icon-45">
                <img
                  src="/assets/image/Moon.svg"
                  alt="..."
                  className="img-fluid"
                />
              </div>
            </a>
            <span className="text-light">
              <a href="/">
                <span>D{"'"}AlgoRidim</span>
              </a>
            </span>
          </div>

          <nav
            id="navbar"
            className={`navbar ${
              open && "navbar-mobile animated fadeIn fast"
            } `}
          >
            <ul className="nana custom-scroll-bar" ref={nana}>
              {def.map((d, index) => {
                return (
                  <li key={index} className={d.dropdown ? "dropdown" : ""}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();

                        if (d.dropdown) {
                          const nav = document.querySelector("#navbar");
                          if (nav && nav.classList.contains("navbar-mobile")) {
                            e.currentTarget.nextElementSibling.classList.toggle(
                              "dropdown-active"
                            );
                          }
                        } else {
                          setC(d.hash);
                          disability(e);
                        }
                      }}
                      className={`nav-link scrollto cap-txt ${
                        c === d.hash && "active"
                      } ${
                        d.dropdown &&
                        d.sub.find((e) => e.hash === c) &&
                        "active"
                      }`}
                      href={d.hash}
                    >
                      {!d.dropdown ? (
                        d.route
                      ) : (
                        <>
                          <span>Works</span>{" "}
                          <i className="bi bi-chevron-down"></i>
                        </>
                      )}
                    </a>
                    {d.dropdown && (
                      <ul className="custom-scroll-bar">
                        {d.sub.map((d, index) => {
                          return (
                            <li key={index}>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  setC(d.hash);
                                  disability(e);
                                }}
                                className={`nav-link scrollto cap-txt ${
                                  c === d.hash && "active"
                                }`}
                                href={d.hash}
                              >
                                {d.route}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}

              <li>
                {theme === day && (
                  <button
                    name="theme_button_day"
                    className="getstarted d-flex x5-gap ai-c fw-9 scrollto w-full rounded-2 text-decoration-none"
                    style={{ width: "fit-content" }}
                    href="#about"
                    onClick={() => {
                      toggleTheme(night);
                    }}
                  >
                    <i className="bx bx-sun"></i>
                    <span className="cap-txt">Light</span>
                  </button>
                )}
                {theme === night && (
                  <button
                    name="theme_button_night"
                    className="getstarted d-flex x5-gap ai-c fw-9 scrollto w-full rounded-2 text-decoration-none"
                    style={{ width: "fit-content" }}
                    href="#about"
                    onClick={() => {
                      toggleTheme(day);
                    }}
                  >
                    <i className="bx bx-moon"></i>
                    <span className="cap-txt">Dark</span>
                  </button>
                )}
              </li>
              {open && <Socials />}
            </ul>
            <button
              name="menu_toggle_button"
              className="menu mobile-nav-toggle"
              id="menuBtn"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <i
                className={`bi ${open ? "bi-x is-5" : "bi-list"} icon is-4`}
              ></i>
            </button>
          </nav>
        </div>
      </Header>
    </ThemeWrappper>
  );
};

export default Navbar;
