import GameField from "./components/GameField/GameField";
import Cell from "./components/Cell/Cell";
import {useState} from "react";
import Counter from "./components/Counter/Counter";

function App() {

  const cell = {hasItem:false, clicked:false,};

  const createItems = () => {
    const arrayOfItems:typeof cell[] = [];
    for (let i = 0; i <= 35; i++) {
      arrayOfItems.push(cell);
    }
    const randomIndex = Math.floor(Math.random() * arrayOfItems.length) + 1;
    arrayOfItems[randomIndex].hasItem = true;
    return arrayOfItems
  }


  const [items, setItems] = useState(createItems());
  const [count, setCount] = useState(0)
  const cellClick = (index:number) => {
    const itemsCopy = [...items];
    const itemCopy = {...items[index]};
    itemCopy.clicked = true;
    itemsCopy[index] = itemCopy;
    setItems(itemsCopy)
    setCount( count + 1)

  }
  const resetBtn = () => {
    setItems(createItems)
  }

  return (
    <div className="App">
      <GameField>
        {items.map((some , index) => (
          <Cell
            cellClick={() => cellClick(index)}
            key={Math.random()}
            color={some.clicked}
          />
        ))}
      </GameField>
      <div>
        <Counter count={count}/>
      </div>
      <button onClick={resetBtn}
        style={{textAlign:"center" , position:"absolute", bottom:"50px", left:"355px"}}>
        Reset
      </button>
    </div>
  );
}

export default App;
