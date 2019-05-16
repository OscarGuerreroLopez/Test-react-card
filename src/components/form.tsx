import React from "react";
import { IFormProps } from "../interfaces";

export const FormComponent = (props: IFormProps) => {
  const {
    handleSubmit,
    setccName,
    setccCvv,
    setccExpiration,
    setccNumber,
    cardInfo
  } = props;

  const { ccName, ccCvv, ccNumber, ccExpiration } = cardInfo;

  return (
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
  );
};
