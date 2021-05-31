import * as React from "react";

export interface MenuProps {
  options: String[];
  optionClassName?: String;
}

const LeftSideMenu: React.FC<MenuProps> = (props) => {
  const { options, optionClassName } = props;

  return (
    <>
      {options.map((option) => (
        <a className={"nav-link " + optionClassName} href="#">
          {option}
        </a>
      ))}
    </>
  );
};

export default LeftSideMenu;
