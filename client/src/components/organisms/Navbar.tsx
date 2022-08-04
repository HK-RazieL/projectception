import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Links } from "../types/Links";
import { NavigationContext } from "../../contexts/NavigationContext";


type NavbarProps = {
  data: Array<Links>;
};

export default function Navbar() {
  const data = useContext(NavigationContext);

  return (
    <nav>
      {data.map((el) => (
        <Link to={el.path} key={el.path}>{el.name}</Link>
      ))}
    </nav>
  );
}
