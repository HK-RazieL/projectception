import React from "react";

import { Links, Props } from "../components/types/Links";
import { createContext } from "react";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contacts from "../components/pages/Contacts";

const navigationContext: Links[] = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/about", name: "About", component: <About /> },
  { path: "/contacts", name: "Contacts", component: <Contacts /> },
];

export const NavigationContext =
  React.createContext<Links[]>(navigationContext);

const NavigationContextProvider = (props: Props) => {
  return (
    <NavigationContext.Provider value={navigationContext}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
