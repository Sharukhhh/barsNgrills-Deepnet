import React from 'react'

const Title = ({heading , isMain}) => {
  return (
    <>
        {isMain ? (
            <h1 className='text-xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white' style={{ textShadow: '2px 2px 2px #ff007f' }}>
                {heading}
            </h1>
        ) : (
            <h1 className='text-lg mb-6 text-center sm:text-2xl md:text-xl lg:text-2xl xl:text-4xl font-bold leading-tight text-white' style={{ textShadow: '2px 2px 2px #ff007f' }}>
                {heading}
            </h1>
        )}
    </>
  )
}

export default Title