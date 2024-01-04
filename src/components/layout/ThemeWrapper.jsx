/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { day, night } from "../../data/ThemeConstants";

const ThemeWrappper = ({ children, className, id, style }) => {
  const { theme } = useContext(ThemeContext);

  const tractTheme = (value) => {
    switch (value) {
      case day:
        return "light";

      case night:
        return "dark";

      default:
        return "dark";
    }
  };

  return (
    <Theme
      className={`${className} bg-special ${tractTheme(theme)}`}
      id={id}
      style={style}
    >
      {children}
    </Theme>
  );
};

export default ThemeWrappper;

const Theme = styled.div``;
