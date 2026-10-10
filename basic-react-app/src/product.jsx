import './product.css';
export default function product({title, price, features, features1}) {
    // console.log("features", features);
    const list = features.map((feature) => <li>{feature}</li>);
    // console.log("list", list);
    let styles = { backgroundColor: "lightblue", color: "black", padding: "10px", margin: "10px" };
    if(price>3000){
  return (
    <div className="product">
        <h3>Title : {title}</h3>
        <p>Price: ${price}</p>
        <h5>Product Description, check </h5>
        <ul>{list}</ul>
        <p>{features1.a}</p>
        <p>{features1.b}</p>
        <p>{features1.c}</p>
        <p>Price is greater than 3000</p>
    </div>
  );
}else{
    return (
    <div className="product">
        <h3>Title : {title}</h3>
        <p>Price: ${price}</p>
        <h5>Product Description, check </h5>
        <ul>{list}</ul>
        <p>{features1.a}</p>
        <p>{features1.b}</p>
        <p>{features1.c}</p>
        <p>Price is less than 3000</p>
    </div>
  );

}
}

// export default product;