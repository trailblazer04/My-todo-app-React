//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    <>
      <div className="container">
        <div className="todo-app">
          <h2>To-Do List <img src="src/assets/icon.png" alt="icon image" /></h2>
          <div class="row">
            <input type="text" id="input-box" placeholder="Add your text"/>
            <button onclick="addTask()">Add</button>
        </div>
        <ul id="list-container">
            <li class="checked">Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li> 
        </ul>
        </div>
      </div>
    </>
  )
}

export default App
