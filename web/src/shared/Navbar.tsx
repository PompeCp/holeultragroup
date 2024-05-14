import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


import { NAVBAR_NAVIGATION } from "../assets/static/navbar_navigation";

import stock from "../assets/stock.png";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={stock} />
      </div>
      <div className="navbar__navigation">
        {NAVBAR_NAVIGATION.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.link}
              className="navbar__navigation__item"
            >
              {item.name}
            </Link>
          );
        })}
        <div className="navbar__navigation__icon-hamburger">
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle">
            <FontAwesomeIcon style={{ cursor: "pointer", fontSize: '30px' }} icon={faBars} />
          </label>
          <div className="navbar__navigation__icon-hamburger__nav">
            {NAVBAR_NAVIGATION.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className="navbar__navigation__icon-hamburger__nav__item"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
