import { useState } from 'react';
export default function Counter() {
    let [count, setCount] = useState(0);  //Intialization of state variable count with initial value 0 , except this code , everything thing will be re-render.

    console.log("Counter component is rendered");
    console.log("Count value is: ", count);
    function increment() {
        // setCount(count + 1);
        setCount((currCount) =>{
            return currCount + 1;
        })
    }
    return (
        <>
            <h3>Counter</h3>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </>
    );
}