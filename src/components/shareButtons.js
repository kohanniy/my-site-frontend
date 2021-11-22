import { useRouter, withRouter } from 'next/router';
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

export const getURL = (path = '') =>
  {console.log(process.env); return `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}${path}`};

export const FacebookShare = withRouter(({ iconProps, router, ...props }) => (
  <FacebookShareButton url={getURL(router.pathname)} {...props}>
    <FacebookIcon {...iconProps} /> Поделиться
  </FacebookShareButton>
));

export const LinkedinShare = withRouter(({ router, iconProps, ...props }) => (
  <LinkedinShareButton url={getURL(router.pathname)} {...props}>
    <LinkedinIcon {...iconProps} /> Линкануть
  </LinkedinShareButton>
));

export const TelegramShare = withRouter(({ router, iconProps, ...props }) => (
  <TelegramShareButton url={getURL(router.pathname)} {...props}>
    <TelegramIcon {...iconProps} /> Отправить
  </TelegramShareButton>
));

export const TwitterShare = withRouter(({ router, iconProps, ...props }) => (
  <TwitterShareButton url={getURL(router.pathname)} {...props}>
    <TwitterIcon {...iconProps} /> Твитнуть
  </TwitterShareButton>
));

export const VKShare = withRouter(({ router, iconProps, ...props }) => (
  <VKShareButton url={getURL(router.pathname)} {...props}>
    <VKIcon {...iconProps} /> Поделиться
  </VKShareButton>
));
