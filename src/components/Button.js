import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-5 py-2 m-1 bg-gray-200 rounded-2xl hover:bg-black hover:text-white ' >
        <button>{name}</button>        
    </div>
  )
}

export default Button
