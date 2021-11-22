import { Stack } from '@mui/material';
import useMatchesScreenSize from '../hooks/useMatchesScreenSize';
import Contacts from './Contacts';
import ShareButtonsBlock from './ShareButtonsBlock';
const Footer = () => {
  const { matchesSm } = useMatchesScreenSize();
  return (
    <Stack component='footer' sx={{ p: '20px 0' }} spacing={3}>
      <Contacts direction={matchesSm ? 'column' : 'row'} gap={1} />
      <ShareButtonsBlock />
    </Stack>
  );
};

export default Footer;
