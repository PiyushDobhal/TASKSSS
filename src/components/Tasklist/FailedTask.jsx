import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[310px] p-5 bg-yellow-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className=' bg-red-700 text-sm px-3 py-1 rounded'>
            {data.category}
            </h3>
            <h4 className='text-sm bg-gray-300 rounded-xl p-1 text-black font-bold'>
            {data.taskDate}
            </h4>
           </div>
           
           <h2 className='text-white text-2xl mt-5 font-bold'>{data.taskTitle}</h2>
           <p className='text-white mt-3 text-xl font-semibold'>{data.category}</p>
           <div className='mt-4'>
            <button className='text-sm rounded bg-yellow-800 py-1 px-2 '>Failed</button>
          </div>
        </div>
  )
}

export default FailedTask