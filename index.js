const dogs = require('./dog-service');

(async () => {
  console.log('######## Lets get some K9s! ########\n\n');
  let dogBreedsResponse, dogBreeds;

  try {
    dogBreedsResponse = await dogs.getDogBreeds();
  } catch (err) {
    console.log('%%%%%%%%%%%% Crap! Dog breeds didn\'t load! %%%%%%%%%%%%\n\n');
  }
  dogBreeds = dogBreedsResponse && dogBreedsResponse.data && Object.keys(dogBreedsResponse.data.message).join(', ') || 'There was an error getting breeds!';
  
  let dogImageResponse = await dogs.getRandomDogImage().catch(err => {
    console.log('%%%%%%%%%%%% Shoot, no dog picture!! %%%%%%%%%%%%\n\n');
  })
  let dogImage = dogImageResponse && dogImageResponse.data && dogImageResponse.data.message || 'Error getting image!';
  
  console.log('Dog Breeds:\n', dogBreeds, '\n\nDog Image:\n', dogImage);
  
  console.log('\n\n######## Dog time is over! ########');
})();