import React from 'react'
import { EyeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function Card(props){
    const {name, country, url} = props.data
  return (
    <div className='relative w-60 h-60 overflow-hidden rounded-2xl shadow-lg group'>
        <img src={url} alt={name} className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-200' />
        <div className='absolute inset-0 flex justify-between items-end bg-gradient-to-t from-black/60 to-transparent'>
            <div className='p-4 text-white'>
                <h2 className='text-xl font-bold mb-2'>{name}</h2>
                <h3>{country}</h3>
            </div>
            <div className='pr-5 pb-4'>
                <Link to={'/cities/' + name}>
                    <button className='btn w-10 h-10 p-1 text-white rounded-md border'>
                     <EyeIcon/>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Card;
