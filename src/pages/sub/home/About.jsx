import { ScreenO, ThemeWrappper, Title } from "../../../components/layout";
import { PicCards } from "../../../components/design";
import { ScrollTo } from "../../../functions/ScrollTo";

const images = [
  {
    id: 1,
    img: "/assets/image/profile.jpg",
  },
];

const About = () => {
  return (
    <ThemeWrappper className="about" id="About">
      <ScreenO className="centerize">
        <div className="inner d-flex x30-gap jc-c p-2 py-4 ai-c jc-c bend-840 overflow-hidden relative">
          <PicCards
            images={images}
            className="wow zoomIn w-100 max-width-600 m-auto d-flex ai-c jc-c"
          ></PicCards>
          <div
            style={{ fontSize: "calc(100% + 0.35vmin)" }}
            className="boxy w-100 d-flex flex-column x0-gap wow slideInUp max-width-600"
          >
            <Title>About Me</Title>
            <div>
              <p>
                A Committed , Disciplined 🥋 and a Reliable Developer 💻, who
                keeps to his project and products deadline ⌛ with all sincerity
                and no delay ⌚.
              </p>
              <p>
                I am also very passionate about tech to the extent of making
                sure, I keep up to date 📅 with latest technologies ⚙.
              </p>
              <p>
                There is so much more I will like to share but don&#39;t worry
                the portfolio will let you know more about me, Or you can just
                check out my CV 😁.
              </p>
              <div className="d-flex x10-gap align-items-center justify-content-end">
                <a
                  download="Daniel Fadamitan CV"
                  href="/assets/others/my-cv.pdf"
                  className="mod"
                >
                  <button
                    name="download_btn"
                    className="go-on invet d-flex x5-gap ai-c p-2 px-4 rounded fw-bold float-right user-select-none bg-s-o"
                  >
                    <i className="bx bxs-download"></i>
                    <span>Download CV</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="downer position-absolute" style={{ bottom: "0px" }}>
            <button
              name="goto_btn"
              className="down fw-9 wow wow slideInUp"
              style={{ backgroundColor: "transparent", color: "inherit" }}
              onClick={() => {
                ScrollTo("#Expertise");
              }}
            >
              <i className="bi bi-chevron-down is-3_5"></i>
            </button>
          </div>
        </div>
      </ScreenO>
    </ThemeWrappper>
  );
};

export default About;
