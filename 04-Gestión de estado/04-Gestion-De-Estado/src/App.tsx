import { useState } from "react";

function App() {
  console.log("Renderizando...");

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const [user, setUser] = useState([{ name: "John", age: 25 }]);
  const handleUser = () => {
    setUser([...user, { name: "Jane", age: 22 }]);
    console.log(user);
  };
  // const a = [1, 2, 3, 4, 5];
  return (
    <>
      <button onClick={handleClick}>count is {count}</button>
      <button onClick={handleUser}>Add User {count}</button>

      <ul className="list-group">
        {user.map((element, index) => (
          <li
            onClick={() => console.log(element)}
            className="list-group-item"
            key={`${index}`}
          >
            {index + 1}.- {element.name} - {element.age}
          </li>
        ))}
      </ul>
      {/* <ul>
        {a.map((element, index) => (
          <li key={`num-${index}`}>{element}</li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
