import { IPosition } from '@shared/interface/position.interface';

interface ILoginInformation {
  phoneNumber: string;
  smsCode: string;
  emailCode: string;
  token: string;
  sessionHash: string;
}

interface IMeta {
  status: number;
}

interface IData {
  otp_length: number;
  sms_sent: boolean;
}

interface ILoginRequestData {
  meta: IMeta;
  data: IData;
}

interface ILoginRequestPhoneNumber {
  phoneNumber: string;
  position: IPosition;
}

interface ILoginRequestSmsCode {
  smsCode: string;
  sessionHash: string;
}

interface ILoginRequestEmailCode {
  emailCode: string;
  sessionHash: string;
}

interface ILoginEmailResponse {
  tinderWebToken: string;
}

interface ILoginResponsePhoneNumber {
  sessionHash: string;
}

export type {
  ILoginResponsePhoneNumber,
  ILoginEmailResponse,
  ILoginRequestEmailCode,
  ILoginRequestSmsCode,
  ILoginRequestPhoneNumber,
  ILoginRequestData,
  IData,
  IMeta,
  ILoginInformation,
};
