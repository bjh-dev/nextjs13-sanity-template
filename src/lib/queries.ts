import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...,
  }
`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    ...,
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    ...,
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    ...,
  }
`;

export const postsQuery = groq`
  *[_type == "post"]{
    ...,
  }
`;
