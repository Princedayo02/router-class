import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Signup from './components/signup.jsx'
import Login from './components/login.jsx'
const router = createBrowserRouter([{
  path: "/", element: <App/>, children: [{path: "/about", element: <About/>}, {path: "/home", element: <Home/>, index: true},{path:"/contact", element: <Contact/>},{path: "/signup", element: <Signup/>}, {path: "/login", element: <Login/>}

  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
                   