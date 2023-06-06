import React, { useState } from 'react'

function Counter() {
    const[count,setCount] = useState(0)
   const handleIncrement = () => {
     setCount  (count + 1)
   }

   const handleDecrement = () => {
    setCount(count -1)
   }
   const handleReset = () => {
    setCount(0) 
   }
  return (
    <div>
        <center>
            <h1>{count}</h1>
            <button onClick={()=>handleIncrement()} className='button'>INCREMENT</button>
            <button onClick={()=> handleDecrement()} className='button'>DECREMENT</button>
            <button  onClick={()=>handleReset()} className='button'>RESET</button>
        </center>
    </div>
  )
}

export default Counter