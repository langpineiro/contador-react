import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="contenedor">
        <div className="Numero">{count}</div>
        <button className="reiniciar" onClick={() => {
          setCount(count + 1)
        }}>CLICK</button>
        <button onClick={() =>{setCount(0)}}>REINICIAR</button>
      </div>
    </>
  );
}

export default App;
