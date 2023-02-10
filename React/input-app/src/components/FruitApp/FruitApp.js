import { useState } from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

//Using ES6 restructing Arrays to recieve the data needed in two different components from the same prop
function FruitApp() {
  const [fruits] = useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'apple', id: 2},
      {fruitName: 'plum', id: 3},
  ]);

  return (
    <div className="Field2">
      <h1>Fruits-Counter (useState)</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default FruitApp;
