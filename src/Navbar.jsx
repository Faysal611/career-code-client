import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    let [bgWhite, setBgWhite] = useState(false);
    window.addEventListener("scroll", () => {
        if(window.scrollY > 10) {
            setBgWhite(true)
        } else {
            setBgWhite(false)
        }
    })
    return (
        <nav className={`mx-auto flex justify-between z-100 sticky top-0 duration-300 px-10 py-5 ${bgWhite ? "bg-[#e8e1e1]" : "bg-transparent"}`}>
            <div className='flex gap-7 items-center'>
                <p className='font-[WDXL_Lubrifont_TC] font-bold mr-8 text-5xl text-green-400'>CARE<span className='underline underline-offset-6 decoration-[#fc5d82]'>ER CO</span>DE</p>
                <div className='relative'>
                    <NavLink to={"/"} className={({ isActive }) => `text-2xl font-medium after:absolute after:bottom-0 ${isActive ? "after:w-full after:h-[7px] after:top-7" : "after:w-0 after:h-1"} hover:after:w-full after:duration-150 after:bg-[#fc5d82] after:left-0 ${bgWhite ? "text-black" : "text-white"}`}>Home</NavLink>
                </div>
                <div className='relative'>
                    <NavLink to={"/alljobs"} className={({ isActive }) => `text-2xl font-medium after:absolute after:bottom-0 ${isActive ? "after:w-full after:h-[7px] after:top-7" : "after:w-0 after:h-1"} hover:after:w-full after:duration-150 after:bg-[#fc5d82] after:left-0 ${bgWhite ? "text-black" : "text-white"}`}>All Jobs</NavLink>
                </div>
                <div className='relative'>
                    <NavLink to={"/contact"} className={({ isActive }) => `text-2xl font-medium after:absolute after:bottom-0 ${isActive ? "after:w-full after:h-[7px] after:top-7" : "after:w-0 after:h-1"} hover:after:w-full after:duration-150 after:bg-[#fc5d82] after:left-0 ${bgWhite ? "text-black" : "text-white"}`}>Contact</NavLink>
                </div>
                <div className='relative'>
                    <NavLink to={"/aboutus"} className={({ isActive }) => `text-2xl font-medium after:absolute after:bottom-0 ${isActive ? "after:w-full after:h-[7px] after:top-7" : "after:w-0 after:h-1"} hover:after:w-full after:duration-150 after:bg-[#fc5d82] after:left-0 ${bgWhite ? "text-black" : "text-white"}`}>About us</NavLink>
                </div>
                
            </div>
            <div className='flex gap-3'>
                <Link className={`btn bg-green-400 text-lg ${bgWhite ? "text-black" : "text-white"}`}>Register</Link>
                <Link className={`btn bg-green-400 text-lg ${bgWhite ? "text-black" : "text-white"}`}>Sign in</Link>
            </div>
        </nav>
    );
};

export default Navbar;