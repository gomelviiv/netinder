export interface IMeta {
  status: number;
}

export interface IData {
  otp_length: number;
  sms_sent: boolean;
}

export interface ILoginRequestData {
  meta: IMeta;
  data: IData;
}

export interface ILoginResponseData {
  phone: number;
}
