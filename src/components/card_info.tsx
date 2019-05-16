import React, { useState } from "react";
import { ICardInfo, IFormProps } from "../interfaces";
import { CardService } from "../services/cardService";
import { Loading } from "./loading";
import { CardProcessed } from "./card_processed";
import { ErrorPage } from "./error";
import { FormComponent } from "./form";

export const CardInfo = () => {
  const [ccNumber, setccNumber] = useState("");
  const [ccCvv, setccCvv] = useState("");
  const [ccName, setccName] = useState("");
  const [ccExpiration, setccExpiration] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAllGood, setIsAllGood] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setIsWaiting(true);
    setIsError(false);

    const cardInfo: ICardInfo = {
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

  const formProps: IFormProps = {
    cardInfo: {
      ccNumber: ccNumber,
      ccCvv: ccCvv,
      ccName: ccName,
      ccExpiration: ccExpiration
    },
    setccNumber,
    setccCvv,
    setccName,
    setccExpiration,
    handleSubmit
  };
  return (
    <div className="container text-center">
      <h2>Card Information Page</h2>
      {!isWaiting ? (
        // Idealy this form will be in a different component, that will be a must do. Due to lack of time
        // I didn't make a separate component but will do in the future
        <FormComponent {...formProps} />
      ) : (
        <Loading />
      )}
      {isAllGood ? <CardProcessed /> : isError ? <ErrorPage /> : <></>}
    </div>
  );
};
