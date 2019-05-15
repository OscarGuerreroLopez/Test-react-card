export interface ICardInfo {
  ccNumber: string;
  ccCvv: string;
  ccName: string;
  ccExpiration: string;
}

export interface IServerResponse {
  message: string;
  id: string;
  ccName: string;
}
