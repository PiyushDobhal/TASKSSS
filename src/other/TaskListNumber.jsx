import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='mt-10 flex justify-between overflow-auto gap-5 screen'>
        <div className='rounded-xl w-[45%] bg-red-400 py-7 px-10'>
            <h2 className='text-3xl font-semibold '>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-green-400 py-7 px-10'>
            <h2 className='text-3xl font-semibold '>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-blue-400 py-7 px-10'>
            <h2 className='text-3xl font-semibold '>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-yellow-400 py-7 px-10'>
            <h2 className='text-3xl text-black font-semibold '>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl text-black font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber