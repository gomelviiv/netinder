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

export interface ILoginResponsePhone {
  phone: string;
}

export interface ILoginResponseSmsCode {
  smsCode: string;
  phone: string;
}

export interface ILoginResponseEmailCode {
  email: string;
  phone: string;
}
