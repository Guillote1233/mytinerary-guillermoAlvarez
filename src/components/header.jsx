import React, { useState } from "react";
import { GlobeEuropeAfricaIcon, UserIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../redux/actions/userActions";

function Header(){
    let [isOpen, setisOpen] = useState(false);
    const userData = useSelector(state=>state.userReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = ()=>{
        dispatch(userLogout())
        navigate('/login')
    }

    return(
        <div className='w-full bg-indigo-500 z-10 top-0 left-0 max-lg:backdrop-blur'>
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
                        <Link to="/" className="hover:text-indigo-300 duration-500">Home</Link>
                    </li>

                    <li className="font-semibold my-7 md:my-0 md:ml-8">
                        <Link to="/cities" className="hover:text-indigo-300">Cities</Link>
                    </li>
                    <li className="font-semibold my-7 md:my-0 md:ml-8">
                        <button onClick={logout} className="flex justify-end items-center gap-1 bg-indigo-600 font-semibold text-white hover:bg-indigo-300 py-2 px-3 rounded">
                            {userData && Object.keys(userData).length !== 0 ? <img src={userData.profilePicture} alt={userData.name} className="w-7 h-7 rounded-full bg-white" />:<UserIcon className="w-7 h-7"/>}
                            {userData && Object.keys(userData).length !== 0 ? "Logout":"Login"}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );    
};

export default Header;