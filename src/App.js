//user define tag 

function App() {
  return (
    <>
    {/* //calling multiple function in app function */}
    
      <AppHeader/>
      <AppBody/>
      <AppFooter/>
    </>
  );

}


// it also user define tag <AppHeader/>
function AppHeader(){
  return(
    <>
    <h1>Header</h1>
  </>
  );
}


// it also user define tag <AppHeader/>
function AppBody(){
  return(
    <>
    <h1>AppBody</h1>
  </>
  );
}

// it also user define tag <AppFooter/>
function AppFooter(){
  return(
    <>
    <h1>AppFooter</h1>
  </>
  );
}

export default App;

//complier convert into es file ecma script 
//build folder diploy at time of production
