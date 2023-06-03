import React, { useReducer } from 'react'
const reducer = (state, action) => {
    if(action.type === "INCR"){
        state = state+1
    }
    if(state>0 && action.type === "DECR"){
        state = state-1
    }
    return state;
}
const UseReducerhook = () => {
    const initialstate = 1
    const[state, dispatch] = useReducer(reducer, initialstate)

    return (
        <div className='incdec__outer'>
            <h1>Use Reducer Hook</h1>
            <div className='effectval'>{state}</div>
            <div className='indc__buttonwrap'>
                <button onClick={() => dispatch({type: "INCR"})}>Increment</button>
                <button onClick={() => dispatch({type: "DECR"})}>Decrement</button>
            </div>
        </div>
    )
}

export default UseReducerhook