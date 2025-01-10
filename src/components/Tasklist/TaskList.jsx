import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
      {data.tasks.map((elem,id) => {
        if (elem.newTask) {
          return <NewTask key={id} data={elem}/>
        }
        if (elem.active) {
          return <AcceptTask key={id} data={elem}/>
        }
        if (elem.completed) {
          return <CompleteTask key={id} data={elem}/>
        }
        if (elem.failed) {
          return <FailedTask key={id} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList