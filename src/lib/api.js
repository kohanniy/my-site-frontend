import axios from 'axios';

export const getStrapiURL = (path = '') =>
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;

export const fetchAPI = async (path) => {
  const requestUrl = getStrapiURL(path);
  const response = await axios.get(requestUrl);
  return response.data;
};
