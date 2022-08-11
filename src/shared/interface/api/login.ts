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
  phoneNumber: string;
}

export interface ILoginResponseSmsCode {
  smsCode: string;
  phoneNumber: string;
}

export interface ILoginResponseEmailCode {
  email: string;
  phoneNumber: string;
}
