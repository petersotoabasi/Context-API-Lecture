import React from 'react';
import Card from './Card';




const Sidebar = (props) => {
  return (
    <div className="flex h-96">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 p-4">
        <div className="text-white text-xl font-semibold mb-4">DashBoard</div>
        <ul>
          <li className="mb-2">
            <button className="w-full p-2 text-center text-white hover:bg-gray-700 focus:outline-none">
              All skills
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full p-2 text-center text-white hover:bg-gray-700 focus:outline-none">
              Tech Skills
            </button>
          </li>
          <li>
            <button className="w-full p-2 text-center text-white hover:bg-gray-700 focus:outline-none">
              Soft Skills
            </button>
          </li>
        </ul>
      </div>
         {/* <Card 
            img="./assets/portfolio-2 tea cup.jpg"
            name="A tea cup with a book"
            text="Another props paragraph 1"
            />

         <Card 
            img="./assets/portfolio-2 tea cup.jpg"
            name="A tea cup with a torch"
            text="Another props paragraph 2"
            />

         <Card 
            img="./assets/portfolio-2 tea cup.jpg"
            name="A tea cup with a torch"
            text="Another props paragraph 3"
            /> */}

       
 
      {/* Main Content */}
      {/* <div className="flex-1 p-4"> */}
        {/* <h2 className="text-2xl font-semibold mb-4 text-dark text-center">Welcome to the Dashboard</h2> */}
        {/* Add your main content here */}
      {/* </div> */}   
     
    </div>

    
  );
};

export default Sidebar;
