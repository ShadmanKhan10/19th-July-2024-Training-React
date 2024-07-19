import React from "react";

export default function NameInput({ name, onNameChange }) {
  const handleChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div>
      <label>
        Enter Name
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
