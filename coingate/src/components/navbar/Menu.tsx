import * as React from "react";

export interface MenuProps {
  options: String[];
  optionClassName?: String;
}

const LeftSideMenu: React.FC<MenuProps> = (props) => {
  const { options, optionClassName } = props;
  console.log(options);

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
