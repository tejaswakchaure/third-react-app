// it also user define tag <AppHeader/>
function AppHeader() {
    return (
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

  export default AppHeader;