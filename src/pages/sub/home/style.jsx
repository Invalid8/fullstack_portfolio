import styled from "styled-components";

const Fret = styled.div`
  display: flex;

  & svg g {
    stroke: var(--sub);
  }

  & svg defs marker polygon {
    fill: var(--sub);
  }

  & .evidence .evidence-img {
    overflow: hidden;
    padding: 2px;

    /* background-color: var(--sub); */
  }

  & .evidence * {
    user-select: none;
  }

  & .evidence .evidence-img img {
    object-fit: cover !important;
    height: 100%;
    width: 100%;

    /* aspect-ratio: 2/1; */
    border-radius: 8px;
    border: 5px solid var(--sub);
    overflow: hidden;
  }

  & .evidence .evidence-img.mobile {
    width: 100%;
    max-width: 480px;
  }

  & .evidence .evidence-img.desktop {
    height: calc(200px + 10vmin);
    min-height: 100px;
    max-height: 300px;
  }

  & .evidence .evidence-img.desktop img {
    object-fit: contain;
  }

  & .evidence .redirect-img img {
    width: 100px;
    rotate: -90deg;
    text-align: center;
  }

  & .evidence button {
    padding: 5px 10px;
    border-radius: 4px;
  }

  & .desc p {
    font-size: calc(100% + 0.23vmin);
  }

  @media (min-width: 961px) {
    & > div:nth-child(1) {
      flex-basis: 40%;
    }

    & > div:nth-child(2) {
      flex-basis: 60%;
    }
  }

  @media (max-width: 960px) {
    & .desc {
      align-items: end;
      justify-items: flex-end;
    }

    & .redirect-img {
      width: 0;
      height: 0;
      overflow: hidden;
    }

    & .more * {
      padding: 0;
      margin: 0;
    }

    & .more {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;
      text-align: center;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
  }

  @media (max-width: 840px) {
    & {
      max-width: 540px;
      margin: 0 auto;
    }
  }
`;

const Expert = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 270px;
  width: calc(280px + 12vmin);
  max-width: 450px;
  min-height: 270px;
  padding: 20px;

  & .inn {
    border-bottom: 0;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    gap: 5px;
  }

  & .h-title {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    font-size: 20px;
  }

  & .h-title .icon-t {
    flex-basis: 50px;
    font-size: calc(100% + 3.5vmin);
  }

  & .h-title .role {
    line-height: 0.95em;
    text-transform: uppercase;
    float: right;
    text-align: right;
    flex-basis: calc(100% - 50px);
    position: relative;
  }

  .h-title .role::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 100%;
    max-width: 150px;
    height: 4px;
    background-color: var(--sub);
    opacity: 0.4;
  }

  & .b-descr {
    font-family: monospace;
    position: relative;
    padding: 20px 0px 0px 20px;
  }

  & .b-descr .unveil {
    /* background-color: var(--sub-o); */
    position: absolute;
    top: 0;
    left: 0;

    width: 2px;
    height: 100%;
  }

  & .b-descr .unveil::after,
  & .b-descr .unveil::before {
    position: absolute;
    content: "<div>";
    width: 100%;
    height: 100%;
    color: #e37b12;

    left: 0;
  }

  .b-descr.back .unveil::after {
    content: " {";
  }

  .b-descr.back .unveil::before {
    content: "}";
  }

  .b-descr.back {
    color: #5cc719;
  }

  .b-descr.back .unveil::after,
  .b-descr.back .unveil::before {
    color: #5cc719;
  }

  &:nth-child(2) .b-descr .unveil::after,
  &:nth-child(2) .b-descr .unveil::before {
    color: #5cc719;
  }

  & .b-descr .unveil::after {
    bottom: 4px;
  }

  & .b-descr .unveil::before {
    top: 89%;
  }

  & .downer {
    width: fit-content;
    margin: 0 auto;
    border-radius: 4px;
    background-color: var(--m-white);
    background-image: var(--bs-gradient);
    padding: 5px 10px;

    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    font-weight: bold;
    text-transform: capitalize;
  }

  & .downer:hover {
    position: relative;
    overflow: hidden;
    color: var(--m-white);
    /* color: transparent; */
  }

  & .downer:hover::after {
    content: "";
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 4px;
    transition: 0.3s ease-in;
    height: 100%;
    width: 100%;
    background-color: var(--bs-success);
    color: var(--m-white);
    animation: circle 1s;
  }

  &:nth-child(2n + 1) .downer:hover::after {
    background-color: var(--bs-danger);
  }

  &:nth-child(2n) .downer:hover::after {
    background-color: var(--bs-success);
  }

  @keyframes circle {
    from {
      width: 0%;
      height: 0%;
    }

    to {
      width: 100px;
      height: 100px;
    }
  }
`;

const Stacks = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-top: 0;
  transition: 0.3s ease-out;
  max-height: 150px;
  overflow: auto;

  &.hidden {
    height: 0;
    overflow: hidden;
    opacity: hidden;
  }

  & .stack {
    font-size: 50px;
    width: 65px;
    height: 65px;
    /* background-color: #020202; */
    border-radius: 8px;

    display: grid;
    place-content: center;
    place-items: center;
  }
`;

export { Fret, Stacks, Expert };
