interface IErrorData {
  error: string;
}

interface IError {
  data: IErrorData;
  status: number;
  isError: boolean;
}

export type { IError };
