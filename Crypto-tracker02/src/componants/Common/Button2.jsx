import React from 'react'

function Button2({text, bgColor}) {
  return (
    <div  className={`py-2 px-1 text-center 
    rounded-md bg-blue-700 w-[100px] cursor-pointer text-sm
    `}>
     {text}
    </div>
  )
}

export default Button2
