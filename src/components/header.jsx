import React, { useState } from "react";
import "./header.css";
import { GlobeEuropeAfricaIcon, UserIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

function Header(){
    let [isOpen, setisOpen] = useState(false);

    return(
        <div className='w-full fixed top-0 left-0'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center text-white'>
                <div className="flex text-2xl cursor-pointer items-center gap-2 md:ml-20">
                    <GlobeEuropeAfricaIcon className="w-8 h-8 text-white"/>
                    <span className="font-bold">myTinerary</span>
                </div>

                <div className="w-8 h-8 absolute right-8 top-6 cursor-pointer md:hidden" onClick={()=> setisOpen(!isOpen)}>
                    {
                        isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon/>
                    }
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-16 bg-white text-black' : 'top-[-490px]'}`}>
                    <li className="font-semibold my-7 md:my-0 md:ml-8">
                        <a href="/" className="hover:text-indigo-400 duration-500">Home</a>
                    </li>

                    <li className="font-semibold my-7 md:my-0 md:ml-8">
                        <a href="/" className="hover:text-indigo-400">Cities</a>
                    </li>
                    <li>
                        <button className="btn flex items-center gap-1 bg-indigo-600 font-semibold text-white hover:bg-indigo-400 py-2 px-7 md:ml-8 rounded md:static"><UserIcon className="w-5 h-5"/>Login</button>
                    </li>
                </ul>
            </div>
        </div>
    );    
};

export default Header;