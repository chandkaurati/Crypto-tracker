import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CoinsContextProvider from './Context/CoinsContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
