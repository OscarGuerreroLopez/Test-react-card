import * as React from "react";
import { Link } from "@reach/router";

export const Home = () => {
  return (
    <div className="container-fluid text-center">
      <h1>Front End for the test</h1>
      <h4>
        I created this simple page to let the user enter the Card data and send
        it to the server
      </h4>
      <p>
        If everything goes ok, the user will get a message saying that the card
        was stored
      </p>

      <p>
        If not an error message will be displayed and the user will have the
        chance to correct
      </p>
      <p>I did not enforced checking of the fields due to the lack of time</p>
      <h4>Please click on the link below to proceed</h4>
      <Link to="card">Go to the user page</Link>
    </div>
  );
};
