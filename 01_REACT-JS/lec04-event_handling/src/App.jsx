function App() {
  const name = "Mahad";

  function handleClick() {
    console.log("Button Clicked")
  }

  function handleMouse() {
    console.log("Mouse Hovered");
  }

  function submitForm() {
    alert("Form Submitted");
  }
  return (
    <>
      <h1>Welcome {name}</h1>
      <p>Paragraph</p>
      <button onClick={handleClick}>Click Me</button>
      <button onMouseOver={handleMouse}>Hover Me</button>
      <br />
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Enter your name" required />
        <button>Submit</button>
      </form>
      
    </>
  )
}

export default App
