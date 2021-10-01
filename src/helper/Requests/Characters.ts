import { Fetcher } from "../Fetcher";
import { IAxios } from "../Model";

export class AxiosCharacter {
  static get = async <T>(page: number): Promise<T> => {
    const res = await Fetcher.get<IAxios<T>>(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return res.data;
  };
};