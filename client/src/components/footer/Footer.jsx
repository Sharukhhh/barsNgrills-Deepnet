import React from 'react'
import FooterBoxes from './FooterBoxes'

const Footer = () => {
  return (
    <>
        <footer className='bg-black py-8'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center'>
                    <FooterBoxes isLogo={false} isLeft={true}/>
                    <FooterBoxes isLogo={true}/>
                    <FooterBoxes isLogo={false} isLeft={false}/>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer