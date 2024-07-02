import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(10)
  const [data, setData] = useState()
  //increase counter

  const increase = () => {
    setCounter(count => count + 1);
  };

  // decresase counter

  const decrese = () => {
    setCounter(count => count - 1)
  }
  // fetch('https://fakestoreapi.com/products')
  //   .then(res => setData(res.json()))
  //   .then(data => console.log(data))

  // console.log(data);
  // react hooks

  function name(x, y) {
    return x + y
  }

  console.log(name(5,10));

  return (
    <div >
      <h1>React Counter</h1>
      <div>
        <button className="btn btn-outline-info px-4" onClick={() => increase()}>+</button>
        <span className="mx-3">{counter}</span>
        <button className="btn btn-outline-info px-4" onClick={() => decrese()}>-</button>
      </div>
    </div>

  )
}


export default App
