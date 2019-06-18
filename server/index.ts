import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import path from 'path'

import dogs from './dog-service';

let app = express()
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('*', express.static(path.resolve(process.env.DIST_PATH, 'client')))
app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(process.env.DIST_PATH, 'client/index.html'))
})
app.listen(3000, () => {
  console.log('listening on port: 3000')
})

// (async () => {
//   console.log('######## Lets get some K9s! ########\n\n');
//   let dogBreedsResponse, dogBreeds;

//   try {
//     dogBreedsResponse = await dogs.getDogBreeds();
//   } catch (err) {
//     console.log('%%%%%%%%%%%% Crap! Dog breeds didn\'t load! %%%%%%%%%%%%\n\n');
//   }
//   dogBreeds = dogBreedsResponse && dogBreedsResponse.data && Object.keys(dogBreedsResponse.data.message).join(', ') || 'There was an error getting breeds!';
  
//   let dogImageResponse = await dogs.getRandomDogImage().catch(err => {
//     console.log('%%%%%%%%%%%% Shoot, no dog picture!! %%%%%%%%%%%%\n\n');
//   })
//   let dogImage = dogImageResponse && dogImageResponse.data && dogImageResponse.data.message || 'Error getting image!';
  
//   console.log('Dog Breeds:\n', dogBreeds, '\n\nDog Image:\n', dogImage);
  
//   console.log('\n\n######## Dog time is over! ########');
// })();