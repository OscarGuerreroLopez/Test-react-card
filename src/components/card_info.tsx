import React, { useState, useEffect } from "react";
import { ICardInfo } from "../interfaces";
import { CardService } from "../services/cardService";
import { Loading } from "./loading";
import { CardProcessed } from "./card_processed";
import { ErrorPage } from "./error";

export const CardInfo = () => {
  const [ccNumber, setccNumber] = useState("");
  const [ccCvv, setccCvv] = useState("");
  const [ccName, setccName] = useState("");
  const [ccExpiration, setccExpiration] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAllGood, setIsAllGood] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
  }, [isWaiting, isError]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setIsWaiting(true);
    setIsError(false);

    let cardInfo: ICardInfo = {
      ccNumber: ccNumber,
      ccCvv: ccCvv,
      ccName: ccName,
      ccExpiration: ccExpiration
    };

    CardService(cardInfo)
      .then(response => {
        setccName("");
        setccNumber("");
        setccCvv("");
        setccExpiration("");
        setIsAllGood(true);
        setIsWaiting(false);
      })
      .catch((err: any) => {
        setIsWaiting(false);
        setIsError(true);
        setIsAllGood(false);
      });
  };

  return (
    <div className="container text-center">
      <h2>Card Information Page</h2>
      {!isWaiting ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="ccName">Full name:</label>
            <input
              type="text"
              className="form-control"
              id="ccName"
              placeholder="Enter your name"
              onChange={e => setccName(e.target.value)}
              value={ccName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ccNumber">Credit Card number:</label>
            <input
              type="text"
              className="form-control"
              id="ccNumber"
              placeholder="Enter your card number"
              onChange={e => setccNumber(e.target.value)}
              value={ccNumber}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ccCvv">CVV:</label>
            <input
              type="password"
              className="form-control"
              id="ccCvv"
              placeholder="CCV"
              onChange={e => setccCvv(e.target.value)}
              value={ccCvv}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ccExpiration">Expiration date as MM/DD</label>
            <input
              type="text"
              className="form-control"
              id="ccExpiration"
              placeholder="MM/DD"
              onChange={e => setccExpiration(e.target.value)}
              value={ccExpiration}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <Loading />
      )}
      {isAllGood ? <CardProcessed /> : isError ? <ErrorPage /> : <></>}
    </div>
  );
};
