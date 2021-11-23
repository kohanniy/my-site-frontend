import React from 'react';
import { List, ListItem } from '@mui/material';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  VKShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  VKIcon,
} from 'react-share';
import ShareButton from './ShareButton';

const shareButtons = [
  {
    id: 1,
    button: FacebookShareButton,
    icon: FacebookIcon,
    text: 'Поделиться',
  },
  {
    id: 2,
    button: LinkedinShareButton,
    icon: LinkedinIcon,
    text: 'Линкануть',
  },
  {
    id: 3,
    button: TelegramShareButton,
    icon: TelegramIcon,
    text: 'Отправить',
  },
  {
    id: 4,
    button: TwitterShareButton,
    icon: TwitterIcon,
    text: 'Твитнуть',
  },
  {
    id: 5,
    button: VKShareButton,
    icon: VKIcon,
    text: 'Поделиться',
  },
];

const ShareButtonsBlock = () => {
  return (
    <List sx={{ display: 'flex', gap: '13px', flexWrap: 'wrap' }} disablePadding>
      {shareButtons.map((item) => (
        <ListItem key={item.id} disablePadding sx={{ width: 'auto', fontSize: '0.8rem' }}>
          <ShareButton
            Button={item.button}
            Icon={item.icon}
            text={item.text}
            iconProps={{
              size: 15,
              borderRadius: 10
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ShareButtonsBlock;
