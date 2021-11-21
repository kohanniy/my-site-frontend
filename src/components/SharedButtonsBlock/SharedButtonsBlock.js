import React from 'react';
import { List, ListItem } from '@mui/material';
import {
  FacebookShare,
  TwitterShare,
  VKShare,
  TelegramShare,
  LinkedinShare,
} from './sharedButtons';
import styles from './SharedButtonsBlock.module.css';

const sharedButtons = [
  FacebookShare,
  TwitterShare,
  VKShare,
  TelegramShare,
  LinkedinShare,
];

const SharedButtonsBlock = () => {
  return (
    <List className={styles.list} disablePadding>
      {sharedButtons.map((Button, index) => (
        <ListItem key={index} disablePadding className={styles.item}>
          <Button
            className={styles.shareButton}
            iconProps={{
              size: 15,
              borderRadius: 10,
              className: styles.icon,
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SharedButtonsBlock;
