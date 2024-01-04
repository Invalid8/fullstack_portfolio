import styled from "styled-components";

const Pics = styled.div`
  transition-property: width, height, display, opacity;
  position: relative;
  min-width: 280px;

  &.none {
    height: 0;
    max-height: 0;
  }

  & img.image-photo {
    transition-property: width height display opacity;
    transition: 0.1s ease-in-out;
    width: calc(100% + 5.5vw);
    min-height: 280px;
    max-width: min(480px, 100vw);
    max-height: 480px;

    object-fit: contain;
    /* position: absolute;
    top: 0;
    left: 0; */

    /* aspect-ratio: 3/2; */
  }

  & img.image-photo.hide {
    opacity: 0;
  }

  & img.image-photo.slide-in {
    transition: 0.3s ease-in;
    display: none;
    /* left: -100%; */
    width: 0;
    opacity: 0;
  }

  & img.fade {
    opacity: 0;
  }

  & .hide {
    width: 0;
    opacity: 0;
    height: 0;
    position: absolute;
    display: none;
    overflow: hidden;
  }

  & .show {
    transition-property: opacity;
    transition: 0.6s ease-in;
    opacity: 1;
  }

  & .stack {
    position: absolute;
    z-index: 10;
    height: 100%;
    min-width: 300px;
    width: calc(100%);
  }

  & .stack::after,
  & .stack::before,
  & .stack {
    opacity: 0.5;
    border: 1px solid #fff;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  & .stack {
    background-color: #2a054d;
    position: relative;
  }

  & .stack::after,
  & .stack::before {
    content: "";
    position: absolute;
    top: 0px;
  }

  & .stack::after {
    background-color: #011219;
    transform: rotate(4deg);
    rotate: 2deg;
  }

  & .stack::before {
    background-color: #0b0b3c;
    transform: rotate(-4deg);
    rotate: -2deg;
  }

  & .arrow-controls {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .arrow-controls button {
    background-color: #111111aa;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: #fff;
    font-size: 30px;

    display: grid;
    place-content: center;
    place-items: center;
  }

  & .arrow-controls button.prev {
    float: left;
  }

  & .arrow-controls button.next {
    float: right;
  }

  & .store {
    transition: 0.3s ease-in;
    width: 100%;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Goto = styled.div`
  & {
    width: 100%;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  & button.dot {
    width: 17px;
    height: 17px;
    min-width: 17px;
    min-height: 17px;
    /* border-radius: 50%; */
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  & button.dot.clicked {
    transition-property: width transform;
    transition: 0.3s ease-in;
    transform: rotate(45deg) scale(0.8);
    border: 1px solid var(--m-black);
  }

  & button.dot.clicked span {
    background-color: var(--m-black);
    width: 100%;
    height: 100%;
    /* padding: 2.5px; */
    /* border-radius: 50%; */
  }

  .light & button.dot {
    background-color: var(--dark);
  }

  .light & button.dot.clicked {
    border: 1px solid var(--main);
  }

  .light & button.dot.clicked span {
    background-color: var(--main);
  }

  .dark & button.dot {
    background-color: var(--light);
    /* border: 2px; */
  }

  .dark & button.dot.clicked {
    border: 1px solid var(--main-o);
  }

  .dark & button.dot.clicked span {
    background-color: var(--main-o);
  }
`;

export { Pics, Goto };
