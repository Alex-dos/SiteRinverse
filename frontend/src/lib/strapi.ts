import axios from 'axios';
import qs from 'qs';

export const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export const fetchStrapi = async (endpoint: string, options = {}) => {
  const { data } = await axios.get(`${strapiUrl}/api${endpoint}`, {
    ...options,
    paramsSerializer: (params) => qs.stringify(params, { encodeValuesOnly: true }),
  });
  return data;
};

export const postStrapi = async (endpoint: string, body: any, options = {}) => {
  const { data } = await axios.post(`${strapiUrl}/api${endpoint}`, body, options);
  return data;
};
