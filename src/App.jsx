function App() {
  const names = ["shad", "sami", "faisal"];
  return (
    <>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
