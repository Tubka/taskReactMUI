import axios from 'axios';

export class Fetcher {
  static get = async <T>(url: string): Promise<T> => {
    return axios.get(url).then(res => ({...res, error: false})).catch(err => ({...err, error: true}));
  };
};