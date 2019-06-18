import http from './http';

let breedsUrl = 'https://dog.ceo/api/breeds/list/all';
let imageUrl = 'https://dog.ceo/api/breeds/image/random';

const getDogBreeds = async () => {
  return http.get(breedsUrl);
}

const getRandomDogImage = async () => {
  return http.get(imageUrl);
}

export default {getDogBreeds, getRandomDogImage}