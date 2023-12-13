import React from 'react'
import Card from './Card'


const All = ({data}) => {
  return (
    <div>
     {data.map((item) => 
     )}
     // CardList.js
import React from 'react';
import Card from './Card';

const CardList = () => {
  // Create an array of data (replace this with your actual data)
  const cardData = [
    { name: 'Card 1', text: 'Description for Card 1', img: 'path/to/image1.jpg' },
    { name: 'Card 2', text: 'Description for Card 2', img: 'path/to/image2.jpg' },
    // Add more items as needed
  ];

  return (
    <div>
      {/* Map over the array and render the Card component for each item */}
      {cardData.map((item, index) => (
        <Card key={index} name={item.name} text={item.text} img={item.img} />
      ))}
    </div>
  );
};

export default CardList;

     
     
        {/* <Card 
        img="./assets/portfolio-2 tea cup.jpg"
        name="A tea cup with a hand"
        text="Another props paragraph 4" />


      <Card 
        img="./assets/portfolio-2 tea cup.jpg"
        name="A tea cup with a leg"
        text="Another props paragraph 5" />

       <Card 
        img="./assets/portfolio-2 tea cup.jpg"
        name="A tea cup with a broom"
        text="Another props paragraph 6" /> */}
    </div>
 
  );
};

export default All;