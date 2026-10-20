import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: ""
    });


    // let [fullName, setFullName] = useState("Sachin Gupta");
    // let [userName, setUserName] = useState("weirdo_0786")
  
  
//     let handleNameChange = (event) => {
//     setFullName(event.target.value);
//   };

//   let handleUserName= (event) => {
//     setUserName(event.target.value);
//   };


    let handleInputChange = (event) =>{
        let fieldName = event.target.name;
        // console.log(fieldName)
        let newValue = event.target.value;
        // console.log(newValue);

        setFormData( (currData) =>{
            // currData[fieldName] = newValue
            return {...currData, [fieldName] : newValue}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName: "",
            userName: "",
        });
    };


  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name : </label>
      <input
        placeholder="Name"
        type="text"
        id="fullName"
        value={formData.fullName}
        // onChange={handleNameChange}
        onChange={handleInputChange}
        name="fullName"
      />
      <br></br>

       <label htmlFor="username">Username : </label>
      <input
        placeholder="Name"
        type="text"
        id="username"
        value={formData.userName}
        // onChange={handleUserName}
        onChange={handleInputChange}
        name="userName"
      />
      <br></br>
      <button>Submit</button>
    </form>
  );
}
