/* eslint-disable react/prop-types */
import styled from "styled-components";

const Title = ({ children, SubTitle }) => {
  return (
    <Titler>
      {SubTitle && <p>{SubTitle}</p>}
      <span className="heading h1">{children}</span>
    </Titler>
  );
};

export default Title;

const Titler = styled.div`
  & {
    text-align: center;
    padding: 10px 10px;
  }

  & * {
    margin: 0;
    padding: 0;
  }

  & span.heading {
    transition: 0.3s ease-in;
    transition-property: font-size font-weight;

    font-size: calc(100% + 3.25vmin);

    text-transform: uppercase;
    font-weight: 700;
    /* margin-bottom: 10px; */
    letter-spacing: 4px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
      position: absolute;
      bottom: -4px;
      content: "";
      width: 100%;
      max-width: 100px;
      height: 6px;
      border-radius: 2px;
      background-image: linear-gradient(
        45deg,
        var(--bs-primary),
        var(--bs-light)
      );
      opacity: 0;
    }
  }
`;
