import * as React from 'react'
import {RouteComponentProps} from '@reach/router'

interface State {
  dogBreeds: any[]
}

export default class Home extends React.Component<RouteComponentProps, State> {


  render = () => (
    <div>
      <h2>Home</h2>
      <h3>Check out these dog breeds!</h3>
      {this.state.dogBreeds && (
        <ul>
          <li></li>
        </ul>
      )}
    </div>
  )
}