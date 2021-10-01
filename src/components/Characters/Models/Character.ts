export interface ICharacter {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
  episode: string[];
  created: string | Date;
  origin: {name: string; url: string};
  type: string;
  location: {name: string; url: string}
  species: string;
}

interface IInfo {
  count: number;
}

export interface IResult {
  results: ICharacter[];
  info: IInfo;
  error: boolean; 
}