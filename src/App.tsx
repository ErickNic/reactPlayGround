import { useContext, useEffect } from 'react'
import { counterContext } from './hooks/context/context';
import './App.css';

function App() {
  const {count, setCount} = useContext(counterContext);
  const convertedValue:number = Number(localStorage.getItem('value')) || 0;
  useEffect(()=>{
    setCount(convertedValue+1)
    console.log()
  },[]);
  return (
    <>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          localStorage.setItem('value',`${count}`)
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
