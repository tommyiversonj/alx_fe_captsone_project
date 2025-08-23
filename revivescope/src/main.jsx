import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// This is the root element 
const rootElement = document.getElementById('root')

// This for React 18 
const root = ReactDOM.createRoot(rootElement)

// This is use to render the app with strict-mode and browser-router
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
