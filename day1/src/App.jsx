import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  const name = "favour";

  return (
    <div>
      <Navbar />
      <Hero />
        <h1 className='title'>welcome to react class {name.toUpperCase()}</h1>
        <h2 style={{color: "blue"}}>we are learning react today</h2>
        <img src="" alt="" />
    </div>
  )
}

export default App
