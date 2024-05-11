import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const[amount,setAmount] = useState(0)

  const handleCalculate=()=>{
    if (amount) {
      dispatch(incrementByAmount(parseInt(amount)))
    } else {
      alert("Please enter any value")
    }
  }

  return (
    <div className='border rounded p-5 text-center'>
      <h1>COUNTER</h1>
      <h1>{count}</h1>
      <div className="buttons d-sm-flex my-5 justify-content-between">
        <button onClick={()=>dispatch(decrement())} style={{height:'50px', width:"100px"}} className='btn btn-primary '>Decrement</button>
        <button onClick={()=>dispatch(reset())} style={{height:'50px', width:"100px"}} className='btn btn-danger '>Reset</button>
        <button onClick={()=>dispatch(increment())} style={{height:'50px', width:"100px"}} className='btn btn-success  '>Increment</button>
      </div>
      <div className="input mt-5 d-md-flex justify-content-around">
        <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control me-3' placeholder='Increment With' />
        <button onClick={handleCalculate} className='btn btn-warning '>Increment</button>
      </div>
    </div>
  )
}

export default Counter
