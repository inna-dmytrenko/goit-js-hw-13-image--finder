import axios from 'axios';
import { error } from '@pnotify/core';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21764210-8d882ab68fe5176a0369b7247';

export default function fetchPhoto(searchValue, pageNumber) {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
  return axios(url)
    .then(r => r.data.hits)
    .catch(error => {
      console.log(alert('Упс, что-то пошло не так'));
    });
}
// console.log(data.hits);
