import * as React from 'react'
import { useState, useEffect } from 'react'
import {RouteComponentProps} from '@reach/router'

interface State {
  loadingRandomImage: boolean
  randomImage: string
}

export default function(props: RouteComponentProps) {

  const [loadingImage, setLoadingImage] = useState<boolean>(true)
  const [randomImage, setRandomImage] = useState<string>('')

  useEffect(() => {
    fetch('/random-dog')
      .then(response => response.json())
      .then((randomImage: string) => {
        setRandomImage(randomImage)
        setLoadingImage(false)
      }).catch(console.log)
  }, [])

  return (
    <div>
      <h2>Random</h2>
      <h3>This is a random dog picture!</h3>
      {!loadingImage && (
          <img src={randomImage} />
      ) || <p>Loading...</p>}
    </div>
  )
}