import Product from './product.jsx';
function productTab(){
    let options = ["high Tech ", "high Quality ", "high Performance "];
    // let options3 = [<li>high Tech </li>, <li>high Quality </li>, <li>high Performance </li>];
    let options2 = {a: "high Tech ", b:"high Quality ", c:"high Performance "};
    return (
        <>
        <Product title="laptop" price={4000} features={options} features1 = {options} />
        <Product title="phone" price={3000} features={options} features1={options2}/>
        {/* <Product /> */}
        </>
    );
}

export default productTab;