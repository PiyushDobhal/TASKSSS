import React,{useContext, useState} from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [task, setTask] = useState({})
    const [userData, setUserData] = useContext(AuthContext) 

    const handleCreateTask = (e) => {
        e.preventDefault()

        setTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,completed:false,failed:false})
        
        const data= userData

        data.forEach(function (elem){
            if (assignTo == elem.firstName){
                elem.tasks.push(task)
                elem.taskNumbers.newTask += 1
            }
        })
        setUserData(data)
        console.log(userData);

        // create task logic here
        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) =>{
                handleCreateTask(e)
            }} className='flex items-start justify-between flex-wrap w-full'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Enter task title'/>
                    </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'/>
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Enter employee name'/>
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input value={category} onChange={(e)=>{setCategory(e.target.value)}}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design, development etc.'/>
                </div>

                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
                    <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}}
                    className='w-full h-44 text-sm py-3 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
                
            </form>
        </div>
  )
}

export default CreateTask