import React from 'react'
import logo from '../../../public/DNS.png'

const FooterBoxes = ({isLogo , isLeft}) => {
  return (
    <div className='bg-transparent cursor-pointer border-white border rounded-lg p-6 text-center'>
        {isLogo ? (
            <>
                <img src={logo} alt="logo" className='m-auto h-20' />
            </>
        ): (
            isLeft ? (
                <>
                    <h4 className="text-blue-500 mb-2">CONNECT WITH US</h4>
                    <p className="text-gray-600">+1 470-788-8255</p>
                    <p className="text-gray-600">email@42barandgrill.com</p>
                </>
            ) : (
                <>
                    <h4 className="text-blue-500 mb-2">FIND</h4>
                    <p className="text-gray-600">327 Memorial Dr SE, Atlanta,</p>
                    <p className="text-gray-600">GA 30312, USA</p>
                </>
            )
        )}
    </div>
  )
}

export default FooterBoxes