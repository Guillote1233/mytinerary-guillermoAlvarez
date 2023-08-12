import React, { useState } from "react";
import { GlobeEuropeAfricaIcon, UserIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

function Header(){
    let [isOpen, setisOpen] = useState(false);

    return(
        <div className='w-full fixed z-10 top-0 left-0 max-lg:backdrop-blur'>
            <div className='md:px-3 py-4 px-5 flex md:justify-around items-center text-white'>
                <div className="flex text-2xl cursor-pointer items-center gap-2">
                    <GlobeEuropeAfricaIcon className="w-8 h-8 text-white"/>
                    <span className="font-bold">myTinerary</span>
                </div>

                <div className="w-8 h-8 absolute right-8 top-6 cursor-pointer md:hidden" onClick={()=> setisOpen(!isOpen)}>
                    {
                        isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon/>
                    }
                </div>
                    
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-16 bg-white text-black pr-[30px]' : 'top-[-490px]'}`}>
                    <li className="font-semibold my-7 md:my-0 md:ml-8">
                        <a href="/" className="hover:text-indigo-300 duration-500">Home</a>
                    </li>

                    <li className="font-semibold my-7 md:my-0 md:ml-8">
                        <a href="/cities" className="hover:text-indigo-300">Cities</a>
                    </li>
                    <li className="font-semibold my-7 md:my-0 md:ml-8">
                        <a href="/" className="flex justify-end items-center gap-1 bg-indigo-600 font-semibold text-white hover:bg-indigo-300 py-2 px-3 w-20 rounded"><UserIcon className="w-7 h-7"/>Login</a>
                    </li>
                </ul>
            </div>
        </div>
    );    
};

export default Header;