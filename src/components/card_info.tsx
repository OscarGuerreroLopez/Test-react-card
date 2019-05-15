import React, { useState } from "react";

export const CardInfo = () => {
  const [ccNumber, setccNumber] = useState("");
  const [ccCvv, setccCvv] = useState("");
  const [ccName, setccName] = useState("");
  const [ccExpiration, setccExpiration] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(ccNumber);
    console.log(ccName);
    console.log(ccCvv);
    console.log(ccExpiration);
  };

  return (
    <div className="container text-center">
      <h2>Card Information Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ccName">Full name:</label>
          <input
            type="text"
            className="form-control"
            id="ccName"
            placeholder="Enter your name"
            onChange={e => setccName(e.target.value)}
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
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

// import * as React from "react";
// import { ICardInfo } from "../interfaces";

// class CardInfo extends React.Component<any, { state: ICardInfo }> {
//   handleOnChange(event: any): void {
//     console.log(event.target.value);

//   }
//   handleSubmit(event: any): void {
//     event.preventDefault();
//     console.log(event.target);
//   }
//   render() {
//     return (
//       <div className="container text-center">
//         <h2>Card Information Page</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="ccName">Full name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="ccName"
//               placeholder="Enter your name"
//               onChange={this.handleOnChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="ccNumber">Credit Card number:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="ccNumber"
//               placeholder="Enter your card number"
//               onChange={this.handleOnChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="ccCvv">CVV:</label>
//             <input
//               type="password"
//               className="form-control"
//               id="ccCvv"
//               placeholder="CCV"
//               onChange={this.handleOnChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="ccExpiration">Expiration date as MM/DD</label>
//             <input
//               type="text"
//               className="form-control"
//               id="ccExpiration"
//               placeholder="MM/DD"
//               onChange={this.handleOnChange}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default CardInfo;
