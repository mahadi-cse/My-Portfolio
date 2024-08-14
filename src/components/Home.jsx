import React from 'react';
import myImage from '../../public/My_image.jpg'
import myImage2 from '../../public/photo.avif'
import { ReactTyped } from "react-typed";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiQlik } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";

const Home = () => {
    return (
        <div className='container mx-auto px-6 my-10 md:px-20 md:my-20' name='Home'>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-full md:w-1/2 mt-12 md:mt-24 space-y-2'>
                    <span>Welcome to my feed</span>
                    <div className='flex space-x-1 text-2xl md:text-4xl'>
                        <h1>Hello I am a </h1>
                        {/* <span className='text-red-700'> Developer</span> */}
                        <ReactTyped className='text-red-700'
                            strings={["Developer", "Coder","Programmer"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                    <p className='text-sm md:text-md text-justify'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate, ratione a nihil consequuntur, voluptas saepe labore. Eius amet, rem laborum repudiandae impedit, illo quia autem quidem harum alias saepe consequuntur, recusandae minus officia voluptatem fuga!
                    </p>
                    <br />
                    {/* {Social media icons} */}
                    <div className='font-bold flex justify-between flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0'>
                        <div >
                            <h1>Available on</h1>
                            <div className='flex space-x-5 pt-4'>
                               <a href="http://www.facebook.com/sm.mahadi.cse" target='_blank'> <FaFacebook className='text-2xl hover:scale-110 duration-200' /></a>
                               <a href="http://www.facebook.com/sm.mahadi.cse" target='_blank'><FaTwitter className='text-2xl hover:scale-110 duration-200' /> </a>
                               <a href="http://www.facebook.com/sm.mahadi.cse" target='_blank'> <FaLinkedin className='text-2xl hover:scale-110 duration-200' /> </a>
                               <a href="http://www.facebook.com/sm.mahadi.cse" target='_blank'><FaTelegram className='text-2xl hover:scale-110 duration-200' /></a>
                            </div>
                        </div>
                        <div>
                            <h1>Currently Working on</h1>
                            <div className='flex space-x-5 pt-4'>
                                <FaReact className='text-2xl hover:scale-110 duration-200' />
                                <FaNodeJs className='text-2xl hover:scale-110 duration-200' />
                                <SiExpress className='text-2xl hover:scale-110 duration-200' />
                                <SiMongodb className='text-2xl hover:scale-110 duration-200' />
                                <DiMysql className='text-2xl hover:scale-110 duration-200' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 mt-8 md:mt-2'>
                    <img className='rounded-full w-[450px] h[395px] md:ml-[110px]  ' src={myImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;
