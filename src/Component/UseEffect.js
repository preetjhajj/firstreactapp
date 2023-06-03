import React, { useEffect } from 'react'

const UseEffect = () => {
    const [myVal, setmyVal] = React.useState(0)
    useEffect(()=>{
        document.title = `Chats(${myVal})`
    })
    return (
        <>
        <div className='incdec__outer'>
                <div className='effectval'>{myVal}</div>
                <div className='indc__buttonwrap'>
                    <button onClick={()=>setmyVal(myVal + 1)}>Increment Incoming Message</button>
                </div>
            </div>
        </>
    )
}

export default UseEffect