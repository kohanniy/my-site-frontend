import { Stack } from '@mui/material';
import React from 'react';
import useMatchesScreenSize from '../../hooks/useMatchesScreenSize';
import Contacts from '../Contacts/Contacts';
import SharedButtonsBlock from '../SharedButtonsBlock/SharedButtonsBlock';
import styles from './Footer.module.css';

const Footer = () => {
  const { matchesSm } = useMatchesScreenSize();
  return (
    <Stack component='footer' className={styles.footer} spacing={3}>
      <Contacts direction={matchesSm ? 'column' : 'row'} gap={1} />
      <SharedButtonsBlock />
    </Stack>
  );
}

export default Footer;
