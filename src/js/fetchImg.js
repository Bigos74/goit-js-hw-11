import axios from 'axios';
export { fetchImg };

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33931055-603b54de36a3001154b70eaae';

async function fetchImg(query, page, perPage) {
  const params = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });

  const url = `${BASE_URL}?${params.toString()}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw new Error(`Failed to get an image with ${url}: ${error.message}`);
  }
}
