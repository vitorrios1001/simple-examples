import React from 'react'
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom'

import { ROUTES } from '../constants'
import TreloPage from '../pages/Trello'
import Layout from '../Layout'

const Routes = () => {
  const renderRoutes = () => (
    ROUTES.map((route, idx) => (
      <Route key={idx} {...route} />
    ))
  )


  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {renderRoutes()}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
