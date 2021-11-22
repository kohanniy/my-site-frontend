import React from 'react';
import { List, ListItem } from '@mui/material';
import {
  FacebookShare,
  TwitterShare,
  VKShare,
  TelegramShare,
  LinkedinShare,
} from './shareButtons';
import styles from '../styles/Common.module.css';

const shareButtons = [
  FacebookShare,
  TwitterShare,
  VKShare,
  TelegramShare,
  LinkedinShare,
];

const ShareButtonsBlock = () => {
  return (
    <List sx={{ display: 'flex', gap: '13px', flexWrap: 'wrap' }} disablePadding>
      {shareButtons.map((Button, index) => (
        <ListItem key={index} disablePadding sx={{ width: 'auto', fontSize: '0.8rem' }}>
          <Button
            className={styles.sharedButton}
            iconProps={{
              size: 15,
              borderRadius: 10,
              className: styles.sharedButtonIcon
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ShareButtonsBlock;
