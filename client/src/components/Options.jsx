import React from 'react'
import Button from './buttons/Button';
import hero2 from '../../public/buttonrow.png'

const Options = () => {
  return (
    <>
        <div className='relative w-full'>
            <img src={hero2} alt="" className='w-full h-32 object-cover'/>

            <div className='absolute inset-0 bg-black opacity-85'></div>

            <div className='absolute inset-0 flex justify-center items-center'>
                <div className='flex justify-between w-full max-w-xs '>
                    <Button text={'food'} isBlue={false}/>
                    <Button text={'Drinks'} isBlue={true}/>
                    <Button text={'Brunch'} isBlue={false}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Options