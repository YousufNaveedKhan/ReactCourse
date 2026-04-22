import React from "react";
import StudentCard from "./components/StudentCard";

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100vw",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  };

  const gridStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const students = [
    {
      name: "Abdul Aziz",
      role: "Mobile Application Developer",
      description: "a passionate mobile app dev",
      image: "https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-man-avatar-isolated-png-image_9935806.png"
    },
    {
      name: "Muhammad Mahad",
      role: "Software Developer",
      description: "a passionate software dev",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"
    },
    {
      name: "Abdullah Meherdil",
      role: "Web Developer",
      description: "a passionate web dev",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hAKQh7EixIjd6Cs5dw4NRybPYllVwEu7zH6uRkSxD8I9sVtH7UNztjc&s"
    },
    {
      name: "Sharyar",
      role: "Graphic Designer",
      description: "a passionate graphic designer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkO5nTPQP20Fes3eGfjYz9U4GYab_xNjaMakU_8SyuxfAE3LapdAm0EQg&s"
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {students.map((student, index) => (
          <StudentCard 
          key={index}
          name={student.name}
          role={student.role}
          description={student.description}
          image={student.image}
          />
        ))};
      </div>
    </div>
  );
}

export default App;