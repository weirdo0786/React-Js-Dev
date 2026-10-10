function handleFormSubmit(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  console.log("Form submitted!");
  console.log("Name:", name);
  console.log("Email:", email);
}
export default function Form() {
  return (
    <div>
      <h1>Form Component</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
