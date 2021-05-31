import * as React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Logo from "./Logo.jsx";
import Menu from "./Menu";
import { Icon } from "@iconify/react";
import menuAlt2 from "@iconify-icons/heroicons-outline/menu-alt-2";

const options: string[] = ["Products", "Resources", "Buy Instantly"];

const NavBar: React.FC = () => {
  return (
    <>
      <div className="row nav-bar desktop-nav">
        <div className="col-8">
          <nav className="nav">
            <Logo />
            <Menu
              optionClassName="left-side-menu"
              options={["Products", "Resources", "Buy Instantly"]}
            />
          </nav>
        </div>
        <div className="col-4" style={{ paddingRight: "2rem" }}>
          <nav className="nav justify-content-end">
            <Menu options={["Log In"]} />
            <button className="singup-btn">
              Sign up
              <ArrowForwardIosIcon className="btn-icon" />
            </button>
          </nav>
        </div>
      </div>
      <div className="row nav-bar mobile-nav">
        <div className="col-8">
          <nav className="nav">
            <Logo />
          </nav>
        </div>
        <div className="col-4" style={{ paddingRight: "2rem" }}>
          <nav className="nav justify-content-end">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary mobile-menu-dropdown mt-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Icon
                  height="25"
                  className={"mobile-menu-icon"}
                  icon={menuAlt2}
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {options.map((option) => (
                  <li>
                    <button className="dropdown-item" onClick={console.log}>
                      {option}
                    </button>
                  </li>
                ))}
                <li>
                  <button className="dropdown-item" onClick={console.log}>
                    Log In
                  </button>
                </li>
                <li>
                  <button className="singup-btn dropdown-btn">
                    Sign up
                    <ArrowForwardIosIcon className="btn-icon" />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
