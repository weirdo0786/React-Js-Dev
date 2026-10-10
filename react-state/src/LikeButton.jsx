import {useState} from 'react';
export default function LikeButton() {
    let [liked, setLiked] = useState(false);

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "red",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    };
    function likeButtonClick() {
        setLiked(!liked);
        console.log("We are going to toggle");
    }
    return (
        <div> 
        {/* <button style={buttonStyle} onClick={likeButtonClick}><i class="fa-regular fa-heart"></i></button> */}
        {/* <p onClick={likeButtonClick}>{liked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</p> */}
         <button style={buttonStyle} onClick={likeButtonClick}>{liked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</button>
        </div>
    );
}