/* eslint-disable react/prop-types */
import { Component } from "react";
import { createContext } from "react";
import {
  createSettings,
  editSettings,
  getSettings,
} from "../data/LocalStorage";
import { day } from "../data/ThemeConstants";

export const ThemeContext = createContext();

const db_theme_key = "x__theme";

export default class ThemeContextProvider extends Component {
  state = {
    theme: getSettings(db_theme_key)
      ? getSettings(db_theme_key)
      : createSettings(db_theme_key, day),
  };

  toggleTheme = (newThemeCode) => {
    this.setState({ theme: newThemeCode });
    editSettings(db_theme_key, newThemeCode);
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
