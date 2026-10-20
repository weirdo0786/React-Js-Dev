import { useState } from "react"
import "./Comment.css"

export  default function Comment(){
    let [comments, setComments] = useState([{

        username: "@sk",
        remarks: "Good Job!",
        rating: 4
        }
    ])
    return (
        <div>
            <h1>Comments of All</h1>
            <div className="comment">
                <span>{comments[0].remarks}</span>
                <br></br>
                <span>(rating : {comments[0].rating})</span>
            </div>
        </div>
    )
}