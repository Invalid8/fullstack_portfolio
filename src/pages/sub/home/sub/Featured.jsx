import { PicCards } from "../../../../components/design";
import { ScreenO, Title } from "../../../../components/layout";
import { ScrollTo } from "../../../../functions/ScrollTo";
import { Fret } from "../style";

const featured = [
  {
    name: "Reader X App",
    link: { web: "https://manga-reader-frontend.vercel.app/", repo: "" },
    upcoming: false,
    img: { link: "/assets/image/websites/Reader_X.png", isDesktop: true },
  },
  {
    name: "Sync Dashboard",
    link: { web: "https://sync-dash.netlify.app/", repo: "" },
    upcoming: false,
    img: { link: "/assets/image/websites/sync-dash.png", isDesktop: true },
  },
  {
    name: "Fruit Tac Toe",
    link: { web: "https://fruit-tac-toe.netlify.app/", repo: "" },
    upcoming: false,
    img: { link: "/assets/image/websites/4.png", isDesktop: true },
  },
  {
    name: "Tacky Fruits",
    link: { web: "#", repo: "" },
    upcoming: true,
    img: { link: "/assets/image/websites/tacky-fruit2.png", isDesktop: true },
  },
  {
    name: "Chat Buddy",
    link: { web: "#", repo: "" },
    upcoming: true,
    img: { link: "assets/image/websites/chat-buddy.png", isDesktop: true },
  },
];

const Featured = () => {
  return (
    <div className="featured" id="Featured">
      <ScreenO className={"centerize"}>
        <Fret className="d-flex ai-c x30-gap jc-c bend-840 py-4 position-relative">
          <div className="desc w-100 wow slideInUp">
            <Title>Projects</Title>
            <div className="inner">
              <p>
                Developed, Scaled and Deployed both static and dynamic website /
                app 💻 using vital web technologies 🚀.
              </p>
              <p>
                While also making sure to keep up with what the users 👨‍💻 will
                like to experience in the app 🧩 they are using.
              </p>
              <p>
                Collaborated with Infrastructural 🏛, personal 🧑 and open source
                ☁ projects at home and aboard.
              </p>
            </div>
          </div>
          <div className="hold d-flex flex-wrap x30-gap custom-scroll-bar w-full pb-5 wow zoomIn">
            <PicCards
              animate
              time={5000}
              goTo
              className="p"
              style={{ height: "fit-content" }}
            >
              {featured.map((f, index) => {
                return (
                  <div
                    key={index}
                    className="evidence d-flex bend-360 reverse-column align-items-end justify-content-center x10-gap"
                  >
                    <div className="more">
                      <div className="redirect-img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 700 650"
                        >
                          <g
                            strokeWidth="17"
                            stroke="hsl(227, 71%, 57%)"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="32.5 33"
                            transform="matrix(0.5299192642332047,-0.8480480961564262,0.8480480961564262,0.5299192642332047,-168.1869441558523,616.2515327692886)"
                          >
                            <path
                              d="M235.41220092773438 293.33717346191406Q797.4122009277344 -2.6628265380859375 399.9122009277344 457.83717346191406Q277.4122009277344 627.3371734619141 564.4122009277344 622.3371734619141 "
                              markerEnd="url(#SvgjsMarker5082)"
                            ></path>
                          </g>
                          <defs>
                            <marker
                              markerWidth="6"
                              markerHeight="6"
                              refX="3"
                              refY="3"
                              viewBox="0 0 6 6"
                              orient="auto"
                              id="SvgjsMarker5082"
                            >
                              <polygon
                                points="0,6 3,3 0,0 6,3"
                                fill="hsl(227, 71%, 57%)"
                              ></polygon>
                            </marker>
                          </defs>
                        </svg>
                      </div>
                      <h6>
                        <i className="bx bxs-star text-special-o"></i>
                        <span>Featured Project</span>
                      </h6>
                      <h3 className="d">{f.name}</h3>
                      {f.upcoming ? (
                        <span>Coming Soon!</span>
                      ) : (
                        <a
                          href={f.link.web}
                          target="_blank"
                          rel="noreferrer"
                          className="mod"
                        >
                          <button className="bg-s-o d-flex ai-c x5-gap">
                            <i className="bx bx-link-external is-2"></i>
                            <span>View Project</span>
                          </button>
                        </a>
                      )}
                    </div>
                    <div
                      className={`evidence-img w-100 rounded-2 overflow-hidden ${
                        f.img.isDesktop ? "desktop" : "mobile"
                      }`}
                    >
                      <img
                        src={f.img.link}
                        alt={f.name}
                        className="rounded-2"
                      />
                    </div>
                  </div>
                );
              })}
            </PicCards>
          </div>
          <div
            className="downer position-absolute wow wow slideInUp"
            style={{ bottom: "0px" }}
          >
            <button
              className="down fw-9"
              style={{ backgroundColor: "transparent", color: "inherit" }}
              onClick={() => {
                ScrollTo("#Projects");
              }}
            >
              <i className="bi bi-chevron-down is-3_5"></i>
            </button>
          </div>
        </Fret>
      </ScreenO>
    </div>
  );
};

export default Featured;
