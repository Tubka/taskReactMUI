import { AxiosResponse } from 'axios';

export interface IAxios<T> extends AxiosResponse {
  error: boolean;
  data: T;
};