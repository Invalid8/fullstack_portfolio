import {
  Landing,
  About,
  Expertise,
  Work,
  Contact,
  Skills,
  Experience,
} from "./sub/home";

const Home = () => {
  return (
    <div className="home d-flex flex-column">
      <Landing />
      <About />
      <div className={"centerize svh-100 w-100"}>
        <Expertise />
        <Skills />
      </div>
      <Work />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
