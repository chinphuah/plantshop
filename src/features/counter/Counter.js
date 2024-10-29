import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount,reset } from "./counterSlice";
import { useState } from 'react'


const Counter = () => {

    const count=useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0);

    // check if number, of not return o
    const addValue = Number(incrementAmount) || 0;

    const handleIncrement = () =>{
        dispatch(increment());
    }

    const resetAll = () => {
        // reset the local state
        setIncrementAmount(0);

        //reset the store
        dispatch(reset());

    }

    console.log(count)
    return (
        <div>
            <h2>Hello{count}</h2>
            <div>{count}</div>
           
            <div>
                <button onClick={()=>handleIncrement()}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>


                <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

                <div>
                    <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                    <button onClick={resetAll}>Reset</button>
                </div>

            </div>
        </div>

    )
}

export default Counter;
