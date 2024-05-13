import React from 'react'

function Button({text, eventHandler, outline}) {
  return (
    <div className={outline ? "bg-black max-w-[150px]  capitalize text-center  border-solid border-2 px-6 py-1 border-blue-600 ease-in-out duration-300 text-white  rounded-full cursor-pointer hover:shadow-white-600/50 ": 
` bg-blue-600  capitalize 
    text-white max-w-[150px] px-6 py-1 rounded-full text-center
    cursor-pointer shadow-lg hover:shadow-blue-600/50 
    ease-in-out duration-300
   `}
     onClick={eventHandler}
     >
    {text}</div>
  )
}

export default Button
