import react,{ createContext, Dispatch, SetStateAction, useState,useEffect } from 'react';

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
    const [loading,setLoading] = useState(true);
    const convertedValue:number = Number(localStorage.getItem('value')) || 0;
    useEffect(()=>{
        if(convertedValue ===0) return;
        setCount(convertedValue)
        setLoading(false);
    },[]);
    useEffect(()=>{
        localStorage.setItem('value',`${count}`);
        console.log(localStorage)
    },[count])
    if(loading){
        return 
    }else{
        return(
            <counterContext.Provider value={{count,setCount}}>{children}</counterContext.Provider>
        )
    }
}

export default CounterProvider;
export {counterContext}