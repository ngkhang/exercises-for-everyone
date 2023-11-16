const EXERCISE_URL = 'https://exercisedb.p.rapidapi.com';
const YOUTUBE_SEARCH_URL = 'https://youtube-search-and-download.p.rapidapi.com';

const APIS_URL = {
  GET_LIST_EXERCISES: `${EXERCISE_URL}/exercises`,
  GET_LIST_BODYPARTS: `${EXERCISE_URL}/exercises/bodyPartList`,
  GET_EXERCISE_BY_ID: (ID: string) => `${EXERCISE_URL}/exercises/exercise/${ID}`,
  GET_VIDEOS: `${YOUTUBE_SEARCH_URL}/search`,
};

const APIS_KEY = {
  EXERCISE: import.meta.env.VITE_RAPID_API_KEY,
  YOUTUBE: import.meta.env.VITE_YOUTUBE_SEARCH_API_KEY,
};

const OPTIONS = {
  EXERCISE: {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': APIS_KEY.EXERCISE,
    },
  },
  YOUTUBE: {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': EXERCISE_URL,
      'X-RapidAPI-Key': APIS_KEY.YOUTUBE,
    },
  },
};

export { OPTIONS, APIS_KEY };

export default APIS_URL;
