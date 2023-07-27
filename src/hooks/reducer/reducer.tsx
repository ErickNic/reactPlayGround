import React, { useReducer,useEffect } from 'react';

// Define the type for the state
interface State {
  count: number;
}

// Define the type for the action
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter: React.FC = () => {
    // Initial state for the reducer
    const persistedState = localStorage.getItem('counterState');
    const initialState: State = { count: 0 };
  
    // useReducer returns the current state and a dispatch function to trigger actions
    const [state, dispatch] = useReducer(reducer, persistedState ? JSON.parse(persistedState) : initialState);
    

    useEffect(() => {
      localStorage.setItem('counterState', JSON.stringify(state));
    }, [state]);

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
    );
  };
  
  export default Counter;