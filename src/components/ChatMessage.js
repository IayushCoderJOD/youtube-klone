import React from 'react'

const ChatMessage = ({name ,message}) => {
  return (
    <>
    <div className='flex items-center shadow-lg p-2'>
      <img class="h-7 " alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MmBOmXsxgjBhhfDh4FSeM9wsFRgC_2uPrE362dA&amp;s" />
    <span className='font-semibold' >{name}-</span>
    <span>{message}</span>
    </div>

    </> 
    
  )
}

export default ChatMessage
