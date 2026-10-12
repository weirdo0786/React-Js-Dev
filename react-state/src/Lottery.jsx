import { useState } from "react"
import "./Lottery.css";
import { genTicket, sum } from "./helper";

export default function Lottery(){
    // let [ticket, setTicket] = useState([0,0,0]);
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15 ;

    let BuyTicket = () =>{
        setTicket(genTicket(3))
    };

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br></br>
            <button onClick={BuyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congrats, you won !!!"}</h3>

        </div>
    )
}