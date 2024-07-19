import React, { useState } from "react";
import NameInput from "./NameInput";
import Greeting from "./Greeting";

function App() {
  const [name, setName] = useState("");
  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <>
      <NameInput name={name} onNameChange={handleNameChange} />
      <Greeting name={name} />
    </>
  );
}

export default App;

// function App() {
//   const names = ["shad", "sami", "faisal"];
//   return (
//     <>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;
