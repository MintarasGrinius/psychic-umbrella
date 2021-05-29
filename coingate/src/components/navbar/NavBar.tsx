import * as React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Logo from "./Logo.jsx";
import Menu from "./Menu";
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <>
      <div className="row nav-bar">
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
    </>
  );
};

export default NavBar;
