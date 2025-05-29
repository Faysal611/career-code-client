import React from 'react';
import banner from "../assets/banner.jpg";
import { motion } from 'motion/react';
import { Link } from 'react-router';
import arrow from "../assets/arrow.svg";
import { Fade, Slide } from 'react-awesome-reveal';

const Home = () => {
    return (
        <>
            <div>
                <div className='sticky w-full top-0 -z-30 after:-top-22 after:-z-10 after:absolute after:w-full after:h-full after:bg-linear-to-r after:from-[#2a2929d7] after:to-[#2f2f2f56]'>
                    <img src={banner} className='relative h-[730px] w-screen object-cover object-left-top -top-22 -z-20' />
                </div>
                <div>
                    <p className='absolute text-white w-[68%] ml-10 top-68 font-bold text-[55px] leading-15'>SEARCH AND APPLY FOR MORE THAN <motion.span animate={{ color: ["#ff0000", "#00ff00", "#03e8fc", "#ff0000"] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className='font-extrabold'>60,000</motion.span> JOBS ON <span className='text-green-400 font-extrabold'>CAREER CODE</span>.</p>
                    <div className='absolute top-100 ml-10 text-lg text-white flex gap-5'>
                        <p>Trending Jobs Right Now</p>
                        <div className='flex gap-3'>
                            <p className='text-green-400 bg-white font-semibold px-3 rounded-2xl'>Web Developer</p>
                            <p className='text-green-400 bg-white font-semibold px-3 rounded-2xl'>AI Developer</p>
                            <p className='text-green-400 bg-white font-semibold px-3 rounded-2xl'>Vibe Coder</p>
                            <p className='text-green-400 bg-white font-semibold px-3 rounded-2xl'>Architect</p>
                        </div>
                    </div>
                    <div>
                        <Link to={"/alljobs"} className='absolute top-115 ml-10 bg-white px-4 py-2 flex items-center font-bold text-2xl text-green-400 rounded-br-2xl rounded-tl-2xl border-l-10 border-b-10'>Start Applying Today!<img src={arrow} className='w-[35px] h-[35px] rotate-[45deg]' /></Link>
                        
                    </div>
                </div>
                <div className='w-11/12 mx-auto'>
                <Fade triggerOnce>
                        <h1 className='text-3xl font-bold text-center text-green-400'>Check out all the <span className='underline underline-offset-2 decoration-[#e85050]'>offers</span>!</h1>
                </Fade>
                </div>
            </div>
        </>
    );
};

export default Home;