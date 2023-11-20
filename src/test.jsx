import React, { useReducer } from 'react'

function reducer(state,action) {
    switch (action.type) {
        case "increment":
            return {count:state.count + action.payload};
            case "decrement":
                return {count:state.count - 1};
        default:
          return state
    }
}
function Test() {

   const [state, dispatch] = useReducer(reducer, {count:1})
function increment() {
    dispatch({type:"increment",payload: 10})
}
function decrement() {
    dispatch({type:"decrement"})
}
  return (
    <>
    <div></div>
<button onClick={increment}>+</button>
<div>deyerim:{state.count}</div>
<button onClick={decrement}>-</button>

    </>
  )
}

export default Test