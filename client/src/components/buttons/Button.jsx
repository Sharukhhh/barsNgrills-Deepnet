import React from 'react'

const Button = ({text , isBlue}) => {
  return (
    <>
        {isBlue ? (
            <button className='bg-[#0796EF] text-white font-medium py-2 px-4 hover:scale-105'>
                {text?.toUpperCase()}
            </button>
        ) : (
            <button className='bg-black text-white font-medium border border-blue-400 py-2 px-4 hover:scale-105'>
                {text?.toUpperCase()}
            </button>
        )}
    </>
  )
}

export default Button