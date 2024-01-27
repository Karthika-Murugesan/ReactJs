import { useState } from "react";
function UseStatee(props){
       const [count,setCount]=useState(0)
      const CountIncrement=()=>{
            setCount(count+1)
       }
       const CountDecrement=()=>{
        setCount(count-1)
       }
       const CountReset=()=>{
        setCount(0)
   }
   return(
       <>
       <h1>Count:{count}</h1>
       <button onClick={CountDecrement}>Drecrement</button>
       <button onClick={CountIncrement}>Increment</button>
       <button onClick={CountReset}>Reset</button>
       </>
   )
}
export default UseStatee;