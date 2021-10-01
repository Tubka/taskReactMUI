import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

enum TYPE_GENDER {
  Male = 'Male',
  Female = 'Female'
};

export const genderIcon = (gender: string): React.ReactNode => {
  switch(gender) {
    case TYPE_GENDER.Male:
      return <MaleIcon style={{fontSize: '16px'}}/>;
    case TYPE_GENDER.Female:
      return <FemaleIcon style={{fontSize: '16px'}}/>;
    default:
      return '';
  };
};