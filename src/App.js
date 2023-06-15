
//user define tag 

import { useState } from "react";
<script src="https://kit.fontawesome.com/94699f4084.js" crossorigin="anonymous"></script>

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
    </>
  );

}

function CounterApp() {
  // data variable :: stateless/statefull
  //let counter = 1;// stateless data

  let [counter, setCounter] = useState(1);

  // member function 
  let likeMeAction = () => {
    counter = counter + 1;
    console.log("I m button click", counter);
    setCounter(counter);
  }
  return (
    <>
      <h1>{counter}</h1>

      <input type="button" value="Like me" onClick={likeMeAction} />
    </>
  );
}
export default App;

