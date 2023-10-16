import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* this is our website compiled to all its parts  */}
    <App />
  </React.StrictMode>,
)
