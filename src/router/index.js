import React from "react";
import { Router } from "@reach/router";

import { Home } from "../components/home.tsx";
import { CardInfo } from "../components/card_info";

const RouterMain = () => {
  return (
    <Router>
      <Home path="/" />
      <Home path="home" />
      <CardInfo path="card" />
    </Router>
  );
};

export default RouterMain;
