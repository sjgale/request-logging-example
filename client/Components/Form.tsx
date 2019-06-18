import * as React from 'react'
import {RouteComponentProps} from '@reach/router'

interface State {}

export default class Form extends React.Component<RouteComponentProps, State> {

  constructor(props: RouteComponentProps) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Send us your favorite dog!</h2>
        <form>
          <div>
            <label>Name<input type="text"/></label>
          </div>
          <div>
            <label>Email<input type="text"/></label>
          </div>
          <div>
            <label>Favorite Dog Breed<input type="text"/></label>
          </div>
          <div>
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}