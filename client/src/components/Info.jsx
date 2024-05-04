import React from 'react'
import Button from './buttons/Button'

const Info = () => {
  return (
    <>
        <section className='bg-black py-8 text-center'>
            <Button text={'order online'} isBlue={true}/>

            <div className='bg-[#C5A059] bg-opacity-70 py-4 mt-8 mx-10'>
                <div className='flex flex-col gap-4 sm:flex-row sm:justify-center mx-4'>
                    <p className='text-white text-sm'>
                        Food may not be refunded. 
                        If your food was made incorrectly we will remake it for you.
                    </p>
                    <hr className="sm:hidden w-0.5 h-auto border-dotted border-black self-center" />
                    <p className='text-white text-sm'>
                        18% service charge will be added to all checks over $100.
                    </p>
                    <hr className="sm:hidden w-0.5 h-auto border-dotted border-black self-center" />
                    <p className='text-white text-sm'>
                        Consuming raw or undercooked meats, poultry, seafood, 
                        shellfish or eggs may increase your risk of foodborne illness
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Info