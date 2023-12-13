import React from 'react'

function Card(props) {
  console.log(props)
  return (
  <div> 
  <div className='mx-[100px] border-[10px]'>
  <img
    alt="Art"
    src={props.img}
    className="h-64 w-full object-fit sm:h-80 lg:h-40"
  /> 
  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl"> {props.name}
  </h3>
  <p className="mt-2 max-w-sm text-gray-700">{props.text}
  </p>
  </div>
</div>






        
      
  )
}

export default Card