import * as React from "react";
import { Link } from "@reach/router";

export const Home = () => {
  return (
    <div className="container-fluid text-center">
      <h1>Front End for the test</h1>

      <Link to="card">Go to the user page</Link>
    </div>
  );
};
