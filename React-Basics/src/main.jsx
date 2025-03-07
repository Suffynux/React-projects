import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement =  React.createElement(
    'h2',
    {className : 'heading'},
    "Hello this is my paragrah"
)
ReactDom.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)