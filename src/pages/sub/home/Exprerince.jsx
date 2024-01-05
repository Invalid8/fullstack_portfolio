/* eslint-disable react/prop-types */
import styled from "styled-components";
import { ScreenO, ThemeWrappper, Title } from "../../../components/layout";

const exps = [
  {
    id: 1,
    position: {
      title: "IT Consultant",
      role: `I solve daily IOT issues, by giving pecise step by step solutions to client IT problems.`,
      duration: "2018 - 2019",
    },
    company: {
      name: "Ulma IT Solutios",
      location: "Hybrid (Lagos, Nigeria)",
      link: "",
      logo: "",
    },
    skills: ["IOT", "IT Consultant"],
  },
  {
    id: 2,
    position: {
      title: "Desktop Publisher",
      role: `Later I began working as a Desktop Publisher at a Cyber Cafe. While working ther I was able to improve in my desktop publishing skills.`,
      duration: "2019 - 2020",
    },
    company: {
      name: "Indiana Ventures",
      location: "On Site (Lagos, Nigeria)",
      link: "",
      logo: "",
    },
    skills: [
      "IOT",
      "Ms Word",
      "Ms Excel",
      "PowerPoint",
      "Typing",
      "Graphic Design",
      "IT Consultant",
    ],
  },
  {
    id: 3,
    position: {
      title: "frontend web developer",
      role: `Currently Working as a Frontend & Backend Webdevelopment freelancer`,
      duration: "2020 - Current",
    },
    company: {
      name: "upwork",
      location: "Remote",
      link: "https://upwork.com",
      logo: "/assets/image/icons/upwork.svg",
    },
    skills: ["HTML5", "React", "JavaScript", "CSS"],
  },
  {
    id: 4,
    position: {
      title: "backend web developer",
      role: `Currently Working as a Frontend & Backend Webdevelopment freelancer`,
      duration: "2021 - Current",
    },
    company: {
      name: "freelancer",
      location: "Remote",
      link: "https://freelancer.com",
      logo: "/assets/image/icons/freelancer.svg",
    },
    skills: ["Node Js", "EJS", "Django", "Fastly", "Express"],
  },
];

const Expery = ({ exp, index }) => {
  return (
    <div className="expery d-flex flex-column w-100 wow slideInLeft fast">
      <div
        data-bs-toggle="collapse"
        className="question collapsed d-flex ai-c x20-gap"
        href={`#faq${index}`}
        aria-expanded="false"
      >
        <div className="job d-flex justify-content-between ai-c w-100 x30-gap h-100">
          <p className="title fw-5 m-0 cap-txt d-flex x10-gap ai-c fw-9">
            <span>{exp.position.title}</span>
            <span>-</span>
            <span>{exp.company.name}</span>
          </p>
          <p className="date m-0">{exp.position.duration}</p>
        </div>
        <div className="iconB">
          <i className="bi bi-plus icon-show is-2_5 fw-8"></i>
          <i className="bi bi-dash icon-close is-2_5 fw-8"></i>
        </div>
      </div>
      <div
        id={`faq${index}`}
        className="collapse body"
        data-bs-parent=".faq-list"
      >
        <div className="inner d-flex x30-gap ai-c">
          <div className="hold d-flex flex-column x10-gap">
            <div className="company-info d-flex flex-wrap ai-c x5-gap">
              <div className="location d-flex x5-gap ai-c">
                <i className="bx bxs-location-plus is-2"></i>
                <span>{exp.company.location}</span>
              </div>
              {exp.company.link && (
                <div className="location d-flex x5-gap ai-c">
                  <i className="bx bx-link-external is-2"></i>
                  <span>
                    <a
                      className="mod"
                      href={`${exp.company.link}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {exp.company.link.split("https://").join("")}
                    </a>
                  </span>
                </div>
              )}
            </div>
            <div className="job-desc">
              <p>{exp.position.role}</p>
            </div>
            <div className="technologies d-flex flex-wrap x5-gap">
              {exp.skills.map((e, index) => {
                return (
                  <button className="technology" key={index}>
                    {e}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="logo">
            {exp.company.logo ? (
              <img src={exp.company.logo} alt="..." />
            ) : (
              <div className="fill-in-logo centerize">
                <span>
                  {exp.company.name[0]}
                  {exp.company.name.split(" ")[1][0]}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <ThemeWrappper id="Experience" className="faq">
      <ScreenO className={"centerize"}>
        <div className="aos-init aos-animate" data-aos="fade-up">
          <Title>WORK EXPRERINCE</Title>
          <Exes
            className="faq-list aos-init aos-animate max-width-540"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {exps.map((exp, index) => {
              return <Expery index={index} exp={exp} key={`#faq${index}`} />;
            })}
          </Exes>
        </div>
      </ScreenO>
    </ThemeWrappper>
  );
};

const Exes = styled.div`
  & {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  & .expery {
    color: var(--light);
    gap: 10px;
  }

  & .expery .question {
    cursor: pointer;
    transition: 0.3s;
    background-color: var(--main-o);
    padding: 8px 17px;
    border-radius: 4px;
  }

  & .expery .body .inner {
    background-color: var(--sub);
    padding: 15px;
    gap: 5px;
    border-radius: 4px;
  }

  & .expery .body .inner button.technology {
    background-color: var(--main);
    color: #fff;
    padding: 6px 16px;
    border-radius: 20px;
    font-weight: 500;
  }

  & .expery .body .inner .logo {
    width: 100px;
    height: 100px;
    max-width: 150px;
    max-height: 150px;
    min-width: 100px;
    min-height: 100px;
  }

  & .expery .fill-in-logo {
    background-color: var(--main);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    aspect-ratio: 2/3;
    text-align: center;

    font-size: calc(100% + 3vmin);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;
    user-select: none;
  }

  & .expery .body .inner .location i {
    color: var(--main);
  }

  & .expery .job .date {
    font-size: 99%;
  }

  & .expery .icon-show {
    display: none;
  }

  & .expery .collapsed {
    background-color: var(--main);
  }

  & .expery .collapsed .icon-show {
    display: inline-block;
    transition: 0.6s;
  }

  & .expery .collapsed .icon-close {
    display: none;
    transition: 0.6s;
  }
`;

export default Experience;
