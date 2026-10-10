function doSomething(event) {
    console.log("Button clicked!");
    console.log("Event:", event);
}
function printBye() {
    console.log("Bye Bye");
}

export default function Button() {
    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    };

    return (
        <div>
        <button style={buttonStyle} onClick={doSomething}> Click Me</button>
        <p onClick={printBye}>This Para is for Demo</p>
        </div>
    );
}
