import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
function App() {

  return (
    
    <div>
        <Header/>
       <main className='min-h-[600px]'><Outlet/></main> 
        <Footer/>
    </div>
   
  )
}

export default App
