import React from 'react'
import React,{useState, createContext} from "react";

const AppContext = createContext()


function ContextApi() {
  return (
    <div>



    </div>
  )
}

export default ContextApi


// // Step 1: Create a context
// import React, { createContext, useState, useContext } from 'react';

// const MyContext = createContext();

// // Step 2: Create a provider component
// const MyProvider = ({ children }) => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const decrement = () => {
//     setCount(prevCount => prevCount - 1);
//   };

//   return (
//     <MyContext.Provider value={{ count, increment, decrement }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // Step 3: Use the context in your components
// const CounterDisplay = () => {
//   const { count } = useContext(MyContext);

//   return <p>Count: {count}</p>;
// };

// const CounterButtons = () => {
//   const { increment, decrement } = useContext(MyContext);

//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// // Step 4: Use the provider in your app
// const App = () => {
//   return (
//     <MyProvider>
//       <div>
//         <h1>Context API Example</h1>
//         <CounterDisplay />
//         <CounterButtons />
//       </div>
//     </MyProvider>
//   );
// };

// export default App;
