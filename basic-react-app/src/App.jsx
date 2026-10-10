import './App.css';
// import Title from './title.jsx';
import Product from './product.jsx';
import ProductTab from './productTab.jsx';
// import MessageBox from './messageBox.jsx';
import NewProductTab from './newProductTab.jsx';
import Button from './Button.jsx';
import Form from './Form.jsx';


function Description() {
  return <p>This is a description</p>;
}

function App() {
  // return <Title />; or we can write like this also below
  return (
  // <div id="app" className="container">
  <>
    <h1>Welcome to React</h1>
    {/* <ProductTab /> */}
    {/* <NewProductTab /> */}
    <Button />
    <Form />
  </>
  );
}

//to render the component we need to write like a HTML tags
// <Title /> or <Title></Title> both are same

export default App;




