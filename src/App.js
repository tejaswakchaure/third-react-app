import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <StringDemo />

    </>
  );
}

function StringDemo() {
  
  let [title, setTitle] = useState("Tejas Wakchaure"); // stateful + DOM Opr

  let LowerCase = () => {
    title = title.toLowerCase();
    console.log(title);
    setTitle(title);
  };

  let UpperCase = () => {
    title = title.toUpperCase();
    console.log(title);
    setTitle(title);
  };

  return (
    <>

      <h5>
        {title}{" "}
        <input type="button" value="UPPER CASE" onClick={UpperCase} />
        <input type="button" value="lower case" onClick={LowerCase} />
      </h5>
    </>
  );
}

export default App;



// import { useState } from "react";
// function App() {
//   return(
//     <>
//     <h1>String</h1>
//     <StringDemo/>
//     </>
//   );
// }


// function StringDemo() {
// let [title, setTitle] = useState("Srushti Bidgar");

// let lowerCase = () => {
//   title = title.toLowerCase();
//   console.log(title);

//   setTitle(title);
// };
// let upperCase = () => {
//   title = title.toUpperCase();
//   console.log(title);

//   setTitle(title);
// };



//   return (
//   <>
//   <h1>{title}</h1>
//   <input type="button" value="Lower" onclick={lowerCase}/>
//   <input type="button" value="Upper" onclick={upperCase} />
//   </>
//   );
// }

// export default App;