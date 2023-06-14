//user define tag 

function App() {
  return (
    <>
      {/* //calling multiple function in app function */}

      <AppHeader />
      <AppBody />
      <AppFooter />
    </>
  );

}


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


// it also user define tag <AppHeader/>
function AppBody() {
  return (
    <>
      <div className="alert alert-success fs-3 ">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          rem corrupti ipsam, necessitatibus, ut tempore nisi aspernatur cumque
          blanditiis quae quia. Corrupti, in ducimus. Ullam suscipit inventore
          quam ex non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus tempora eum cupiditate. Nobis id, facere iure debitis eum a
          at, nulla placeat, tenetur tempore ratione adipisci deleniti alias
          aspernatur voluptatem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis rem corrupti ipsam, necessitatibus, ut
          tempore nisi aspernatur cumque blanditiis quae quia. Corrupti, in
          ducimus. Ullam suscipit inventore quam ex non. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptatibus tempora eum cupiditate.
          Nobis id, facere iure debitis eum a at, nulla placeat, tenetur tempore
          ratione adipisci deleniti alias aspernatur voluptatem!
        </div>
      </div>
    </>
  );
}

// it also user define tag <AppFooter/>
function AppFooter() {
  return (
    <>
      <div className="bg-dark text-light fs-1 d-flex justify-content-center aligb-item-center mt-0"
        style={{ height: "200px" }}>
        Lorem ipsum dolor sit amet.
      </div>
    </>

  );
}

export default App;

//complier convert into es file ecma script 
//build folder diploy at time of production
