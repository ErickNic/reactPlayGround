import react,{ createContext, Dispatch, SetStateAction, useState } from 'react';

interface CounterContextType {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
}
const counterContext = createContext<CounterContextType>({
    count: 0,
    setCount: ()=>{}
});

interface children{
    children: React.ReactNode
}

const CounterProvider: react.FC<children>  = ({children})=>{
    const [count, setCount] = useState(0);

    return(
        <counterContext.Provider value={{count,setCount}}>{children}</counterContext.Provider>
    )
}

export default CounterProvider;
export {counterContext}