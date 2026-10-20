import { useEffect, useState } from "react"

export default function Counters(){
    let [count, setCount] = useState(0)

    let inCount = () =>{
        setCount(currCount => currCount+1)
    }

    useEffect(function sideEffects(){
        console.log("This is the side effects.")
    })
    return (
        <div>
            <h3>Count :{count}</h3>
            <button onClick={inCount}>+1</button>
        </div>
    )
}