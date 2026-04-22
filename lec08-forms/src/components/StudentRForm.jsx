import { useState } from "react";

function StudentRForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
        ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    alert("Form Submitted");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
        <input type="text" name="course" placeholder="Enter your course" value={formData.course} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentRForm