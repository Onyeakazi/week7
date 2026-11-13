import './App.css'
import Hero from './components/Hero';
import Navbar from "./components/Navbar"
import ServiceList from "./components/ServiceList"
import Contact from "./components/Contact"
import { useState } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? "app dark-theme" : "app light-theme"}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>

      <Hero name={"John Doe"} tagline={"Web developer"}/>

      <ServiceList />

      <Contact />
    </div>
  )
}

export default App
