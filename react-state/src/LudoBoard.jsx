import {useState} from "react";
export default function LudoBoard() {
    // let [blueMove, setBlueMove] = useState(0);
    // let [redMove, setRedMove] = useState(0);
    // let [yellowMove, setYellowMove] = useState(0);
    // let [greenMove, setGreenMove] = useState(0);

    let [move, setMove] = useState({
        blue: 0,
        red: 0,
        yellow: 0,
        green: 0
    });


    return (
        <div className="ludo-board">
            <h1>State Topic in React js</h1>
            <p>Game Begings</p>
            <div className="Board" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                {/* <p>Blue Moves = {blueMove}</p>
                <button onClick={() => setBlueMove(blueMove + 1)}>+1</button>
                <p>Red Moves = {redMove}</p>
                <button onClick={() => setRedMove(redMove + 1)}>+1</button> 
                <p>Yellow Moves = {yellowMove}</p>
                <button onClick={() => setYellowMove(yellowMove + 1)}>+1</button>
                <p>Green Moves = {greenMove}</p>
                <button onClick={() => setGreenMove(greenMove + 1)}>+1</button> */}

                    <p>Blue Moves = {move.blue}</p>
                    <button style={{ backgroundColor: 'blue', color: 'white' , border: 'None', padding: '5px 10px' }} onClick={() => setMove({...move, blue: move.blue + 1})}>+1</button>
                    <p>Red Moves = {move.red}</p>
                    <button style={{ backgroundColor: 'red', color: 'white' , border: 'None', padding: '5px 10px' }} onClick={() => setMove({...move, red: move.red + 1})}>+1</button>
                    <p>Yellow Moves = {move.yellow}</p>
                    <button style={{ backgroundColor: 'yellow', color: 'black' , border: 'None', padding: '5px 10px' }} onClick={() => setMove({...move, yellow: move.yellow + 1})}>+1</button>
                    <p>Green Moves = {move.green}</p>
                    <button style={{ backgroundColor: 'green', color: 'white' , border: 'None', padding: '5px 10px' }} onClick={() => setMove({...move, green: move.green + 1})}>+1</button>   
            </div>
        </div>
    );
}

