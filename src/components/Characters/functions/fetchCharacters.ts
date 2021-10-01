import { AxiosCharacter } from '../../../helper/Requests/Characters'
import { IResult } from '../Models/Character';

export const fetchCharacters = async (page: number): Promise<IResult> => {
  return await AxiosCharacter.get<IResult>(page);
};