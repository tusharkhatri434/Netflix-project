const bearerToken = process.env.REACT_APP_BEARER_TOKEN;

export const PROFILE_AVATAR2 = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg";
export const PROFILE_AVATAR ="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:bearerToken
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const GPT_API_Key = "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";