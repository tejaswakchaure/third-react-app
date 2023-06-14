

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
  // member function 
  let likeMeAction = () => {
    console.log("I m button click");
  }
  return(
    <>
    <input type="button" value="Like me" onClick={likeMeAction}/>
    </>
  );
}
export default App;

