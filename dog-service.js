const http = require('./http');
const args = require('yargs').argv;

let breedsUrl = 'https://dog.ceo/api/breeds/list/all';
let imageUrl = 'https://dog.ceo/api/breeds/image/random';
// `node . -f` to fail the tests
if (args.f) {
  breedsUrl = 'https://dog.ceo/api/breeds/list/all-bad';
  imageUrl = 'https://dog.ceo/api/breeds/image/random-bad';
}

exports.getDogBreeds = async () => {
  return http.get(breedsUrl);
}

exports.getRandomDogImage = async () => {
  return http.get(imageUrl);
}