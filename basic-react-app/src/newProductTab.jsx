import Product from './productTab.jsx';
export default function NewProductTab(){
    let styles = {
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "15px 0px 0px 15px ",
        borderRadius: "0%",
        width: "100%",
        height: "50vh",
        // margin: "10px",
        // border: "1px solid black",
        // borderRadius: "5px",
        // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        // backgroundColor: "#f9f9f9"  
    }
    return (
        <div style={styles}>
        {/* <h2>Check correct or not?</h2> */}
        <Product />
        <Product/>
        </div>
    );
}
