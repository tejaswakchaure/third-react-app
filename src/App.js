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
    {/* <h1 className="bg-dark text-align-center">Header</h1> */}

    <div className="row  bg-success text-light p-3 fs-3">
      <div className="col d-flex justify-content-center">
        <div className="col">Home</div>
        <div className="col">Project</div>
        <div className="col">AboutUs</div>

      </div>
    </div>
  </>
  );
}


// it also user define tag <AppHeader/>
function AppBody(){
  return(
    <>
    <div className="alert alert-success fs-3">
      lorem
    </div>
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
