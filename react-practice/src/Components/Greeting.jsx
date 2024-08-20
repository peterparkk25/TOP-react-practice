function Button({
  text = "Click Me!",
  color = "blue",
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };
  return (
    <button
      onClick={() => handleClick("https://www.google.com")}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}

export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };
  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}

// export default function Person() {
//   const [person, setPerson] = useState({ name: "John", age: "31" });

//   const handleIncreaseAge = () => {
//     const newPerson = { ...person, age: person.age + 1 };
//     setPerson(newPerson);
//   };

//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h1>{person.age}</h1>
//       <button onClick={handleIncreaseAge}>Increase Age</button>
//     </>
//   );
// }
