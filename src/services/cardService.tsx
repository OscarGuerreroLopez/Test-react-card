import axios from "axios";
import { ICardInfo } from "../interfaces";

export const CardService = (props: ICardInfo) => {
  const axiosConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      credentials: "same-origin",
      "Access-Control-Allow-Methods": "POST, GET",
      "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type"
    }
  };

  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000/card", props, axiosConfig)

      .then((response: any) => {
        resolve(response);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
