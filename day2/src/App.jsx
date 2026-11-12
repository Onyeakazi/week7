import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Greet from './components/Greet'

function App() {
  // useState returns an array with 2 items: 
  // 1. The current state variable
  // 2. The setter function used to update it
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 50 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name == ""){
      setError("Please enter a name!");
      return;
    }

    setSuccess("Name submitted successfully, check the console.");
    console.log("You enter the name: ", name);
    setName("");
  }

  return (
    <div>
      {isLoggedIn && <h1>welcome to my website</h1>}
      {isLoggedIn ?
        <div>
          <Greet name={"Favour"} bgColor={"red"}/>
          <Greet name={"John doe"} bgColor={"green"}/>
          <Greet name={"Mary doe"} bgColor={"orange"}/>
          <br />
          <hr />
          <br />
          <Button text={"Get started"} bgColor={"green"}/>
          <Button text={"Login"} bgColor={"blue"}/>
          <Button text={"Logout"} bgColor={"yellow"}/>
          <hr />
          <h1>Counter: {count}</h1>
          <button onClick={()=> setCount(count + 1)} style={{margin: "5px", padding: "10px"}}>+</button>
          <button onClick={()=> setCount(count - 1)} style={{margin: "5px", padding: "10px"}}>-</button>
          <button onClick={()=> setCount(0)} style={{margin: "5px", padding: "10px"}}>reset</button>

          <ol>
            {products.map((product)=> (
              <li key={product.id}>{product.name} - {product.price}</li>
            ))}
          </ol>
          <br />

          <h3>React controlled form</h3>

          {error && <p style={{color: "red"}}>{error}</p>}
          {success && <p style={{color: "green"}}>{success}</p>}

          <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input type="submit" />
          </form>
          <br />
        </div>
      : <div>
          <h1>You are logged out!</h1>
        </div>
      }

      <button onClick={()=> setIsLoggedIn(!isLoggedIn)} style={{margin: "5px", padding: "10px"}}>{isLoggedIn ? "Logout" : "Login"}</button>
      
    </div>
  )
}

export default App
