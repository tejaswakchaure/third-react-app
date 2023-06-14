

//user define tag 

function App() {
  return (
    <>
    <h1>Counter App</h1>
    <CounterApp/>
    </>
  );

}

function CounterApp(){
// data variable :: stateless/statefull
let counter = 1;// stateless data

  // member function 
  let likeMeAction = () => {
    counter = counter +1;
    console.log("I m button click",counter);
  }
  return(
    <>
    <h1>counter</h1>
    <input type="button" value="Like me" onClick={likeMeAction}/>
    </>
  );
}
export default App;

