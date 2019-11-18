import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from 'containers/Home'

const routes = [
  { path: '/:word', component: Home },
  { path: '', component: Home }
]

const Routes: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

export default Routes