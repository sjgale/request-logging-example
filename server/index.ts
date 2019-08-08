import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import path from 'path'

import dogs from './dog-service';

let app = express()
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/dog-breeds', async (req, res) => {
  const dogBreeds = await dogs.getDogBreeds()
      .then(response => response.data && Object.keys(response.data.message))
      .catch(console.log)
  res.json(dogBreeds)
})

app.get('/random-dog', async (req, res) => {
  const randomDogImage = await dogs.getRandomDogImage()
      .then(response => response.data && response.data.message)
      .catch(console.log)
  res.json(randomDogImage)
})

app.post('/dog-form-response', (req, res, next) => {
  console.log(req.body)
  res.json({message: 'OK!'})
})

app.get('*', express.static(path.resolve(process.env.DIST_PATH, 'client')))

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(process.env.DIST_PATH, 'client/index.html'))
})

app.listen(3000, () => {
  console.log('listening on port: 3000')
})