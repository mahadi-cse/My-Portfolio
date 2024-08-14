import React, { useState } from 'react'
import myImage from '../../public/My_image.jpg'
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu,setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white shadow-md h-16 fixed top-0 left-0 right-0'>
      <div className='flex justify-between h-16 items-center'>
        <div className='flex space-x-2 '>
          <img className='w-12 h-12 rounded-full' src={myImage} alt="" />
          <h1 className='font-semibold text-xl cursor-pointer'>Mahad<span className='text-green-500 text-xl'>i</span>
          <p className='text-sm'>Web Developer</p></h1>
        </div>
        <div>
          <ul className="hidden md:flex space-x-8">
          {
            navItems.map(({id,text}) =>(
              <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
               <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
            ))
          }
          </ul>
          <div className='md:hidden' onClick={()=> setMenu(!menu)}> {
            !menu?<FiMenu size={24} />:
            <IoCloseSharp size={24}/>
            }
          </div>
        </div>
      </div>
     {
      menu &&  (<div className='bg-white'>
      <ul className="md:hidden flex flex-col h-screen justify-center items-center space-y-3 font-semibold" >
           {
            navItems.map(({id,text}) =>(
              <li key={id}>
               <Link
               onClick={()=> setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
            ))
           }
          </ul>
      </div>)
     }
    </div>
  )
}

export default Navbar
