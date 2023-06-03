import React, { useState } from 'react'

const ButtonActionIncDc = () => {
    
    const myNum = 5
    const [myVal, setmyVal] = useState(myNum)
    return (
        <>
            <div className='incdec__outer'>
                <div className='effectval'>{myVal}</div>
                <div className='indc__buttonwrap'>
                    <button onClick={()=>setmyVal(myVal + 1)}>Increment</button>
                    <button onClick={()=> myVal > 0 ? setmyVal(myVal - 1) : setmyVal(0)}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default ButtonActionIncDc