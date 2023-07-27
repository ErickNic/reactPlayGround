import { useContext, useEffect } from 'react'
import { counterContext } from './hooks/context/context';
import './App.css';
import Counter from './hooks/reducer/reducer';

function App() {
  const {count, setCount} = useContext(counterContext);


  return (
    <>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          
        }}>
          count is {count}
        </button>
        <p>
          counter using <code>useContext()</code> from react
        </p>
        <Counter/>
      </div>
    </>
  )
}

export default App
