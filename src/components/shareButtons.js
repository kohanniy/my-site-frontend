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

const URL = 'https://kohanniy.vercel.app';

export const FacebookShare = withRouter(({ iconProps, router, ...props }) => (
  <FacebookShareButton url={`${URL}${router.pathname}`} {...props}>
    <FacebookIcon {...iconProps} /> Поделиться
  </FacebookShareButton>
));

export const LinkedinShare = withRouter(({ router, iconProps, ...props }) => (
  <LinkedinShareButton url={`${URL}${router.pathname}`} {...props}>
    <LinkedinIcon {...iconProps} /> Линкануть
  </LinkedinShareButton>
));

export const TelegramShare = withRouter(({ router, iconProps, ...props }) => (
  <TelegramShareButton url={`${URL}${router.pathname}`} {...props}>
    <TelegramIcon {...iconProps} /> Отправить
  </TelegramShareButton>
));

export const TwitterShare = withRouter(({ router, iconProps, ...props }) => (
  <TwitterShareButton url={`${URL}${router.pathname}`} {...props}>
    <TwitterIcon {...iconProps} /> Твитнуть
  </TwitterShareButton>
));

export const VKShare = withRouter(({ router, iconProps, ...props }) => (
  <VKShareButton url={`${URL}${router.pathname}`} {...props}>
    <VKIcon {...iconProps} /> Поделиться
  </VKShareButton>
));
