import styled from "styled-components";

const Header = styled.header`
  & .menu {
    background-color: transparent !important;
    color: inherit !important;
    min-width: 50px;
    display: none !important;
    min-height: 50px;
  }

  & .menu .icon.bi-x {
    color: #e81515;
  }

  & {
    height: 72px;
    transition: all 0.5s;
    z-index: 997;
  }

  & .logo {
    margin: 0;
    line-height: 1;
    font-weight: 400;
    letter-spacing: 2px;
  }

  & * a,
  a {
    text-decoration: none !important;
    font-size: calc(15px + 0.75vmin);
  }

  & .logo a,
  & .logo a:hover {
    text-decoration: none;
  }

  .light & .logo a {
    color: var(--dark);
  }

  .dark & .logo a {
    color: var(--light);
  }

  & .logo img {
    padding: 0;
    margin: 0;
    max-height: 40px;
  }

  & .navbar {
    padding: 0;
  }

  & .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  & .navbar li {
    position: relative;
  }

  & .navbar a,
  & .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 10px 30px;
    color: inherit;
    white-space: nowrap;
    transition: 0.3s;
    user-select: none;
  }

  & .navbar a i,
  & .navbar a:focus i {
    line-height: 0;
    margin-left: 5px;
  }

  .light & .navbar a:hover,
  .light & .navbar .active,
  .light & .navbar .active:focus,
  .light & .navbar li:hover > a {
    color: var(--main-o);
    font-weight: bold;
    user-select: none;
  }

  & .navbar a:hover,
  & .navbar .active,
  & .navbar .active:focus,
  & .navbar li:hover > a {
    color: var(--sub-o);
    user-select: none;
  }

  & .navbar .getstarted,
  & .navbar .getstarted:focus {
    background: var(--main-o);
    color: var(--light);
    padding: 10px 25px;
    margin-left: 30px;
    border-radius: 50px;
  }

  & .navbar .getstarted:hover,
  & .navbar .getstarted:focus:hover {
    color: var(--light);
    background: var(--main);
  }

  & .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 14px;
    top: calc(100% + 0px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  & .navbar .dropdown ul li {
    min-width: 200px;
  }

  & .navbar .dropdown ul a {
    padding: 10px 20px;
    text-transform: none;
  }

  & .navbar .dropdown ul a i {
  }

  & .navbar .dropdown ul a:hover,
  & .navbar .dropdown ul .active:hover,
  & .navbar .dropdown ul li:hover > a {
    color: var(--main-o);
  }

  & .navbar .dropdown:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  & .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  & .navbar .dropdown .dropdown:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }

  @media (max-width: 1366px) {
    & .navbar .dropdown .dropdown ul {
      left: -90%;
    }

    & .navbar .dropdown .dropdown:hover > ul {
      left: -100%;
    }
  }

  /**
* Mobile Navigation 
*/
  & .mobile-nav-toggle {
    cursor: pointer;
    display: none !important;
    line-height: 0;
    transition: 0.5s;
  }

  @media (max-width: 991px) {
    & #main-btn {
      display: block !important;
    }

    & .mobile-nav-toggle {
      display: block !important;
    }

    & .navbar ul {
      display: none;
    }
  }

  & .navbar-mobile {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(21, 19, 18, 0.9);
    transition: 0.3s;
  }

  & .navbar-mobile .mobile-nav-toggle {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  & .navbar-mobile ul {
    display: block;
    position: absolute;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    padding: 10px 0;
    text-align: center;

    overflow-y: auto;
    transition: 0.3s;
  }

  .light & .navbar-mobile ul,
  .light & .navbar-mobile .dropdown ul,
  .light & .navbar .dropdown ul {
    background-color: var(--light);
  }

  .dark & .navbar-mobile ul,
  .dark & .navbar-mobile .dropdown ul,
  .dark & .navbar .dropdown ul {
    background-color: var(--dark);
  }

  & .navbar-mobile a,
  & .navbar-mobile a:focus {
    padding: 10px 20px;
    color: inherit;
    text-align: center;
  }

  & .navbar-mobile a:hover,
  & .navbar-mobile .active,
  & .navbar-mobile li:hover > a {
    color: var(--sub-o);
  }

  & .navbar-mobile .getstarted,
  & .navbar-mobile .getstarted:focus {
    margin: 15px;
  }

  & .navbar-mobile .dropdown ul {
    position: static;
    display: none;
    margin: 10px 20px;
    padding: 10px 0;
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }

  & .navbar-mobile .dropdown ul li {
    min-width: 200px;
  }

  & .navbar-mobile .dropdown ul a {
    padding: 10px 20px;
  }

  & .navbar-mobile .dropdown ul a i {
  }

  & .navbar-mobile .dropdown ul a:hover,
  & .navbar-mobile .dropdown ul .active:hover,
  & .navbar-mobile .dropdown ul li:hover > a {
    color: var(--sub-o);
  }

  & .navbar-mobile .dropdown > .dropdown-active {
    display: block;
  }
`;

export { Header };
