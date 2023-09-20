import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const Id = process.env.REACT_APP_SANITY_PROJECT_ID;

export const client = sanityClient({
  projectId: Id,
  dataset: 'production',
  apiVersion: '2023-09-19',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);