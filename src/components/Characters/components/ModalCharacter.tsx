import { Modal, Paper } from '@material-ui/core';
import { ICharacter } from "../Models/Character";
import { InfoChar } from './InfoChar';
import '../Characters.css';

interface IProps {
  choosenCharacter: ICharacter;
  isOpenMoreInformation: boolean;
  setIsOpenMoreInformation: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalCharacter: React.FC<IProps> = ({choosenCharacter, isOpenMoreInformation, setIsOpenMoreInformation}) => {
  return (
    <Modal
      open={isOpenMoreInformation}
      onClose={() => setIsOpenMoreInformation(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Paper className='boxModal'>
        <div className='containerModal'>
          <img src={choosenCharacter?.image || ''} alt={choosenCharacter.name}/>
          <InfoChar choosenCharacter={choosenCharacter}/>
        </div>
      </Paper>
    </Modal>
    );
};
