import http from './http';
import args, {argv} from 'yargs';

let breedsUrl = 'https://dog.ceo/api/breeds/list/all';
let imageUrl = 'https://dog.ceo/api/breeds/image/random';
// `node . -f` to fail the tests
if (args.f) {
  breedsUrl = 'https://dog.ceo/api/breeds/list/all-bad';
  imageUrl = 'https://dog.ceo/api/breeds/image/random-bad';
}

const getDogBreeds = async () => {
  return http.get(breedsUrl);
}

const getRandomDogImage = async () => {
  return http.get(imageUrl);
}

export default {getDogBreeds, getRandomDogImage}