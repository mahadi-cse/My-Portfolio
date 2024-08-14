import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
Footer
const App = () => {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default App
