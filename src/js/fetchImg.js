import axios from 'axios';
export { fetchImg };

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33931055-603b54de36a3001154b70eaae';

async function fetchImg(query, page, perPage) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
