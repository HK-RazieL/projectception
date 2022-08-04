import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Links } from "./components/types/Links";
import { NavigationContext } from "./contexts/NavigationContext";

type NavbarProps = {
  data: Array<Links>;
};

export default function App() {
  const data = useContext(NavigationContext);

  return (
    <div className="App">
      <Routes>
        {data.map((el) => (
          <Route path={el.path} element={el.component} key={el.name} />
        ))}
      </Routes>
    </div>
  );
}
