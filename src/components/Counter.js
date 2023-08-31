import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from '../features/counterSlice';
export default function Counter() {

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={dispatch(increment())} aria-label='Increment Value'>Increment</button>
        <span>{count}</span>
        <button onClick={dispatch(decrement())} aria-label='Decrement value'>Decrement</button>
      </div>
    </div>
  )
}
