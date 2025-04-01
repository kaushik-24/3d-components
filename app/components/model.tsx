import { models } from '@/public/data/data'
import React from 'react'

const Model = () => {
  return (
    <>
    <div className='grid lg:grid-cols-4 gap-4 sm:m-3 lg:m-[10vh] p-3 md:grid-cols-3'>
    {models.map((item) => (
    <div key={item.name} className='hover:border-[#901430] hover:border-b-4 cursor-pointer border rounded-2xl'>
    <img  className='  border border-[#901430] rounded-tr-2xl rounded-tl-2xl' src='https://placehold.co/600x400'/>
    <div className='uppercase font-bold m-2 text-center'>
    {item.name} {item.ref}
    </div>
    </div>
    ))}
    </div>
    </>
  )
}

export default Model
