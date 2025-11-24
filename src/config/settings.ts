// Read base API URL from environment at build time (Create React App requires prefix REACT_APP_)
// Falls back to the original public API when not provided.
const baseApiUrl = process.env.REACT_APP_BASE_API_URL || 'https://api.realworld.io/api/';

export default {
  baseApiUrl,
};
