import * as React from 'react'
import {useState, useEffect} from 'react'
import {RouteComponentProps} from '@reach/router'

interface State {
  loadingBreeds:boolean
  dogBreeds: string[]
}

export default function (props: RouteComponentProps) {

  const [dogBreeds, setDogBreeds] = useState<string[]>([])
  const [loadingBreeds, setLoadingBreeds] = useState<boolean>(true)

  useEffect(() => {
    fetch('/dog-breeds')
      .then(response => response.json())
      .then((dogBreeds: string[]) => {
        setDogBreeds(dogBreeds)
        setLoadingBreeds(false)
      }).catch(console.log)
  }, [])

  return (
    <div>
      <h2>Home</h2>
      <h3>Check out these dog breeds!</h3>
      {!loadingBreeds && (
        <ul>
          {dogBreeds.map(breed => <li>{breed}</li>)}
        </ul>
      ) || <p>Loading...</p>}
    </div>
  )
}