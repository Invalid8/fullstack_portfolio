import styled from "styled-components";
import { Dust } from "./components/design";
import Home from "./pages/Home";
import { BackToTop, Navbar } from "./components/layout";

function App() {
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
