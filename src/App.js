import AppHeader from "./pages/AppHeader";
import AppBody from "./pages/AppBody";
import AppFooter from "./pages/AppFooter";

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
export default App;

//complier convert into es file ecma script 
//build folder diploy at time of production
