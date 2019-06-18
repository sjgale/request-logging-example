import * as React from 'react'
import { Router, Link, RouteComponentProps } from '@reach/router'
import Home from './Home'
import Random from './Random'
import Form from './Form'

export default () => {
  return (
    <div>
      <header>
        <h1>My Awesome Dog App</h1>
        <nav>
         <Link to="/"><div style={{color:"green"}}>Home</div></Link>
         <Link to="/random"><div style={{color:"green"}}>Random</div></Link>
         <Link to="/form"><div style={{color:"green"}}>Form</div></Link>
        </nav>
      </header>  
      <Router>
        <Home path="/"></Home>
        <Random path="/random"></Random>
        <Form path="/form"></Form>
      </Router>
    </div>
  )
}