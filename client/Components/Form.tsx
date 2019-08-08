import * as React from 'react'
import { useState } from 'react'
import {RouteComponentProps} from '@reach/router'
import { response } from 'express';

interface State {
  submittingForm: boolean
  formSubmitted: boolean
  name: string
  email: string
  breed: string
  url: string
}

export default function(props: RouteComponentProps) {
  const url = '/dog-form-response'
  const [name, updateName] = useState<string>('')
  const [email, updateEmail] = useState<string>('')
  const [breed, updateBreed] = useState<string>('')
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false)
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  const submitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setFormSubmitting(true)
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        breed
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response: Response) => response.json())
    .then((response: FormResponse) => {
      if (response.message) {
        setFormSubmitted(true)
        setFormSubmitting(false)
      }
    }).catch(err => {
      alert('Error submitting your response!')
    })
  }

  return formSubmitting && (
      <div>
        <h2>Submitting...</h2>
      </div>
    ) || !formSubmitted && (
      <div>
        <h2>Send us your favorite dog!</h2>
        <form action={url} method="post" onSubmit={submitForm}>
          <label>Name
            <input
              name="name"
              type="text"
              value={name}
              onChange={event => updateName(event.target.value)}
              />
          </label>
          <label>Email
            <input
              name="email"
              type="text"
              value={email}
              onChange={event => updateEmail(event.target.value)}
              />
          </label>
          <label>Favorite Dog Breed
            <input
              name="breed"
              type="text"
              value={breed} 
              onChange={event => updateBreed(event.target.value)}
              />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    ) || (
      <div>
        <h2>Thank you for your submission!</h2>
      </div>
    )
}

interface FormResponse {
  message: string
}