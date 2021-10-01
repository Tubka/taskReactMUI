import { useEffect, useState } from "react"
import { Pagination } from "./components/Pagination";
import { useQuery } from 'react-query'
import { ModalCharacter } from "./components/ModalCharacter";
import { ICharacter } from "./Models/Character";
import Alert from '@mui/material/Alert';
import { fetchCharacters } from "./functions/fetchCharacters";
import './Characters.css';

export const Characters = () => {
  const [charactersList, setCharactersList] = useState<ICharacter[]>([]);
  const [isOpenMoreInformation, setIsOpenMoreInformation] = useState(false);
  const [page, setPage] = useState(1);
  const [rowCount, setRowCount] = useState(1);
  const [choosenCharacter, setChoosenCharacter] = useState<ICharacter | null>(null);
  const { isLoading, error, data } = useQuery(['charactersStore', page], () => fetchCharacters(page));

  useEffect(() => {
    if(!data) return;

    setCharactersList(data.results);
    setRowCount(data.info?.count || 1);
  },[data]);

  const openMoreInformation = (char: ICharacter) => {
    if(!char) return alert('Error, try to choose another character.');
    setChoosenCharacter(char);
    setIsOpenMoreInformation(true);
  };

  if(error) return <Alert severity='error'>Character download error, refresh the page</Alert>;
  return (
    <>
      <Pagination 
        characters={charactersList} 
        setPage={setPage} 
        loading={isLoading}
        rowCount={rowCount}
        openMoreInformation={openMoreInformation}
      />
      {choosenCharacter && 
        <ModalCharacter 
          choosenCharacter={choosenCharacter} 
          isOpenMoreInformation={isOpenMoreInformation} 
          setIsOpenMoreInformation={setIsOpenMoreInformation}
        />
      }
    </>
  );
};