import React from 'react'
import Title from '../fonts/Title'


const MenuCard = ({title , isDetailedMenu , datas}) => {
  return (
    <>
        <section className='bg-black py-8'>
            <div className='container mx-auto px-4'>
                <div className='border border-white mx-14 p-6 hover:scale-90'>
                    <Title heading={title}  isMain={false}/>
                    {isDetailedMenu ? (
                        <>
                            <div className='mx-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {datas?.length > 0 ? (
                                    datas?.map((data) => (
                                        <div key={data?._id} className='flex flex-col'>
                                            <div className='text-2xl text-white flex justify-between'>
                                                <h3 className='font-semibold'>{data?.name?.toUpperCase()}</h3>
                                                <p className="">{data?.price}</p>
                                            </div>
                                            <p className="text-gray-500">{data?.description}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className='text-white text-center'>menu  not available at this moment!</p>
                                )}    
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex mt-4 flex-col text-center sm:flex-row justify-around gap-4'>
                                {datas?.length > 0 ? (
                                    datas?.map((data) =>(
                                        <p key={data?._id} className='font-medium text-lg text-white'>{data?.flavour}</p>
                                    ))
                                ) : (
                                    <p className='text-white text-center'>Flavours not available at this moment!</p>
                                )}
                            </div>
                        </>
                    )}    
                </div>
            </div>
        </section>
    </>
  )
}

export default React.memo(MenuCard);