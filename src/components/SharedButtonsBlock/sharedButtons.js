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

export const FacebookShare = ({ iconProps, ...props }) => (
  <FacebookShareButton url='http://localhost:3000' {...props}>
    <FacebookIcon {...iconProps} /> Поделиться
  </FacebookShareButton>
);

export const LinkedinShare = ({ iconProps, ...props }) => (
  <LinkedinShareButton url='http://localhost:3000' {...props}>
    <LinkedinIcon {...iconProps} /> Линкануть
  </LinkedinShareButton>
);

export const TelegramShare = ({ iconProps, ...props }) => (
  <TelegramShareButton url='http://localhost:3000' {...props}>
    <TelegramIcon {...iconProps} /> Отправить
  </TelegramShareButton>
);

export const TwitterShare = ({ iconProps, ...props }) => (
  <TwitterShareButton url='http://localhost:3000' {...props}>
    <TwitterIcon {...iconProps} /> Твитнуть
  </TwitterShareButton>
);

export const VKShare = ({ iconProps, ...props }) => (
  <VKShareButton url='http://localhost:3000' {...props}>
    <VKIcon {...iconProps} /> Поделиться
  </VKShareButton>
);
