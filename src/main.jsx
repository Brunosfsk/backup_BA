import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CardVitrine from './components/CardVitrine'
import  Home  from './Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div>
            <p>aqui</p>
            <Home />
            {/* <CardVitrine/> */}
        </div>
    </React.StrictMode>,
)