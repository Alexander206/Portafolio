// Dependencies
import React from "react";
import { Link } from "react-router-dom";

const HashLink = ({ text, route, setActiveLink, activeLink }) => {
  const onUpdateActiveLink = (data) => {
    setActiveLink(data);
  };

  return (
    <li onClick={() => onUpdateActiveLink(text)} className={activeLink === text ? "active" : ""}>
      <Link to={route}>{text}</Link>
    </li>
  );
};

export default HashLink;
