import { ThemeWrappper } from "../../../components/layout";
import Featured from "./sub/Featured";
import Projects from "./sub/Projects";

const Work = () => {
  return (
    <div className="work" id="work">
      <div className="hold d-flex flex-column x30-gap">
        <ThemeWrappper>
          <Featured />
        </ThemeWrappper>
        <Projects />
      </div>
    </div>
  );
};

export default Work;
