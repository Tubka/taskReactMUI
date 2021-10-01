import { List, ListItem, Divider, ListItemText } from '@material-ui/core';
import { formatDate } from '../functions/formatDate';
import { ICharacter } from '../Models/Character';
import { genderIcon } from './genderIcon';
import '../Characters.css';

interface IProps {
  choosenCharacter: ICharacter;
};

export const InfoChar: React.FC<IProps> = ({choosenCharacter}): JSX.Element => {
  return (
    <List style={{ width: '100%', marginLeft: '20px'}}>
      <ListItem alignItems="center">
        <ListItemText>
          Name:
        </ListItemText>
        <ListItemText>
          {choosenCharacter.name}
        </ListItemText>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center">
        <ListItemText>
          Gender:
        </ListItemText>
        <ListItemText>
          {choosenCharacter.gender} {genderIcon(choosenCharacter.gender)}
        </ListItemText>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center">
      <ListItemText>
          Species: 
        </ListItemText>
        <ListItemText>
        {choosenCharacter.species}
        </ListItemText>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center">
        <ListItemText>
          Status: 
        </ListItemText>
        <ListItemText>
          {choosenCharacter.status}
        </ListItemText>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center">
        <ListItemText>
          Location: 
        </ListItemText>
        <ListItemText>
          {choosenCharacter.location.name}
        </ListItemText>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center">
        <ListItemText>
          Origin: 
        </ListItemText>
        <ListItemText>
          {choosenCharacter.origin.name}
        </ListItemText>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center">
        <ListItemText>
          Created: 
        </ListItemText>
        <ListItemText>
          {formatDate(choosenCharacter.created)}
        </ListItemText>
      </ListItem>
    </List>
  );
};