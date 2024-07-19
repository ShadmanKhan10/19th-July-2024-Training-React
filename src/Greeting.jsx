import React from "react";

export default function Greeting({ name }) {
  return (
    <div>
      <h1>Hello {name ? name : "Stranger"}</h1>
    </div>
  );
}
