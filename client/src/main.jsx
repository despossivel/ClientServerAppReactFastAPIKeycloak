import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  ReactKeycloakProvider
} from '@react-keycloak/web'
import {
  keycloak,
  initOptions
} from "./contexts/keycloak"

ReactDOM.createRoot(document.getElementById('root')).render(<ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
  <App />
</ReactKeycloakProvider>)
