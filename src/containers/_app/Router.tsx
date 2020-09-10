import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '../_layout'
import Home from '../home'
import Products from '../products'

const Router: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
    </Switch>
  </Layout>
)

export default Router
