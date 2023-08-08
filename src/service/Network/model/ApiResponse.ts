export interface ResponseType<T> {
  status: number;
  code: number;
  message: string;
  data: any;
}
export interface Login {
  accessToken: string;
}
