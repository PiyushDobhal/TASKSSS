import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[310px] p-5 bg-blue-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className=' bg-red-700 text-sm px-3 py-1 rounded'>
                {data.category}
            </h3>
            <h4 className='text-sm bg-gray-300 rounded-xl p-1 text-black font-bold'>
                {data.taskDate}
            </h4>
           </div>
           
           <h2 className='text-white  text-2xl mt-5 font-bold'>{data.taskTitle}</h2>
           <p className='text-white mt-3 text-xl font-semibold'>{data.taskDescription}</p>
          <div className='mt-4'>
            <button className='w-fu py-1 text-sm px-2 rounded bg-blue-950 '>Completed</button>
          </div>
        </div>
  )
}

export default CompleteTask