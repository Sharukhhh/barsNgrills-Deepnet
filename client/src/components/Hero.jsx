import React from 'react';
import cover from '../../public/cover.jpg';
import Title from './fonts/Title';

const Hero = () => {
  return (
    <>
        <div className='relative w-full'>
            <img src={cover} alt="cover" className='w-full h-72 object-cover' />

            <div className='absolute inset-0 bg-black opacity-50'></div>

            <div className='absolute inset-0 flex flex-col justify-center text-center'>
                <Title heading={'MENU'} isMain={true}/>

                <p className='mt-2 mr-4 text-sm sm:text-base md:text-lg font-mono text-gray-300'>
                Please take a look at our menu featuring food, drinks, and brunch. 
                If you'd like to place an order, use the "Order Online" button located below the menu.
                </p>
            </div>
        </div>
    </>
  )
}

export default Hero