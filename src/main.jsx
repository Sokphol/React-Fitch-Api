import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import Contect from './Contect.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contect>
        <App/>
    </Contect>
  </React.StrictMode>,
)
