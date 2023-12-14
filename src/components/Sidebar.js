import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  if(!isMenuOpen)return null;
  return (
    <div className='p-2 m-2 w-[165px] leading-[30px] shadow-lg '>
        <ul>
           <li className='font-semibold text-lg mb-3 ' >
            <Link to="/" >
            Home
            </Link>
           </li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1' >Your Channel</li>
          <li  className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'      >History</li>
          <li  className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'   >Your Videos</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >Watch later</li>
        </ul>  
        <hr></hr>
        <ul className='mt-2'>
          <li className='font-semibold text-lg mb-3' >Subscriptions</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >Akshay Saini</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >BB ki vines</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >Ayush Tyagi</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >Ishita Goswami</li>
        </ul>  
        <hr></hr>
        <ul className='mt-2'>
          <li className='font-semibold text-lg mb-3' >Explore</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >Trending</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >Shopping</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >Films</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >Gaming</li>
          <li className=' hover:bg-gray-800  hover:text-white hover:rounded-xl hover:p-1'  >Music</li>
        </ul>  

    </div>
  )
}

export default Sidebar
