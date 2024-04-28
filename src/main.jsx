import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home/Home'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/auth'
import SignUp from './pages/signUp/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastrar',
        element: <SignUp />
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </AuthProvider>
)