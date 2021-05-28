import * as React from "react";

export interface LeftSideMenuProps {
  options: String[];
}

const LeftSideMenu: React.FC<LeftSideMenuProps> = (props) => {
  const { options } = props;
  console.log(options);

  return (
    <>
      {options.map((option) => (
        <a className="nav-link left-side-menu" href="#">
          {option}
        </a>
      ))}
    </>
  );
};

export default LeftSideMenu;
