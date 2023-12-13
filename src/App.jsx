// import './App.css'
// import Card from './Components/Card'
// import LogIn from './Components/LogIn'
// import SideBar from './Components/SideBar'

// function App() {
 
//   return (
//     <>
//     {/* <LogIn/> */}
//     {/* <SideBar/> */}
//     {/* <Card/> */}
    
//     </>
//   )
// }

// export default App



// Step 1: Create a context
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

// Step 2: Create a provider component
const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

// Step 3: Use the context in your components
const CounterDisplay = () => {
  const { count } = useContext(MyContext);

  return <p>Count: {count}</p>;
};

const CounterButtons = () => {
  const { increment, decrement } = useContext(MyContext);

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>Increment</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-4 rounded" onClick={decrement}>Decrement</button>
      </div>
    
  );
};

// Step 4: Use the provider in your app
const App = () => {
  return (
    <MyProvider>
      <div className="min-h-screen justify-center text-5xl">
        <h1>Context API Example</h1><br/>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </MyProvider>
  );
};

export default App;

