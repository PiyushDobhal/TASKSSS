import React from 'react'

const AcceptTask = ({data}) => {
  return (
     <div className='flex-shrink-0 h-full w-[310px] p-5 bg-green-400 rounded-xl'>
     <div className='flex justify-between items-center'>
            <h3 className=' bg-red-700 text-sm px-3 py-1 rounded'>
            {data.category}
            </h3>
            <h4 className='text-sm bg-gray-300 rounded-xl p-1 text-black font-bold'>
            {data.taskDate}
            </h4>
           </div> 
           <h2 className='text-white mt-5 text-2xl font-bold'>{data.taskTitle}</h2>
           <p className='text-white mt-3 text-xl font-semibold'>{data.taskDescription}</p>
           <div className='flex justify-between mt-4'>
        <button className='bg-green-600 py-1 px-2 rounded text-sm'>Mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 rounded text-sm'>Mark as Failed</button>
    </div>
    </div>
  )
}

export default AcceptTask