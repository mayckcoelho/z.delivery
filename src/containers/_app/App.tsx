import React from 'react'
import '../../scss/app.scss'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { AddressProvider } from '../../contexts/address'
import Router from './Router'
import client from '../../services/api'

const App: React.FC = () => (
  <AddressProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  </AddressProvider>
)

export default App
