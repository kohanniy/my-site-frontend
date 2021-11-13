import { getStrapiURL } from './api';

export const getStrapiMedia = (media) =>
  media.url.startsWith('/') ? getStrapiURL(media.url) : media.url;
