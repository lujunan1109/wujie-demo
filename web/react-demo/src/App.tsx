import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import girlPic from './assets/girl.jpg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  window.$wujie?.bus.$on("事件名字", function (msg) {
console.log(msg, 'react接收到vue的消息');

  });

  return (
    <>
      <div className='container-content '>
        <img src={girlPic} alt='girl' width={20} height={20}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="container">Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
