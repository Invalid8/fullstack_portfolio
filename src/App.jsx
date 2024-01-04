import styled from "styled-components";
import { Dust } from "./components/design";
import Home from "./pages/Home";
import { BackToTop, Navbar } from "./components/layout";
import { Animate } from "./functions/ScrollTo";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const classy = ".wow";

    window.addEventListener("load", () => {
      Animate(classy);
    });
    window.addEventListener("scroll", () => {
      Animate(classy);
    });

    return () => {
      window.removeEventListener("load", () => {
        Animate(classy);
      });
      window.removeEventListener("scroll", () => {
        Animate(classy);
      });
    };
  });

  return (
    <APP className="w-100 h-100 text-light" id="App">
      <Dust fixed></Dust>
      <Navbar />
      <Home />
      <BackToTop />
    </APP>
  );
}

const APP = styled.div`
  width: 50px;
`;

export default App;
