/* eslint-disable no-console */
interface Options {
    method: string,
    headers: {
      'X-RapidAPI-Host': string,
      'X-RapidAPI-Key'?: string,
    }
}

const fetchData = async (API_URL: string, OPTIONS : Options) => {
  const response = await fetch(API_URL, OPTIONS);
  const data = await response.json();
  return data;
};

export default fetchData;
