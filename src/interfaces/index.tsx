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

export interface IFormProps {
  cardInfo: ICardInfo;
  setccNumber: (item: string) => void;
  setccCvv: (item: string) => void;
  setccName: (item: string) => void;
  setccExpiration: (item: string) => void;
  handleSubmit: (event: any) => void;
}
