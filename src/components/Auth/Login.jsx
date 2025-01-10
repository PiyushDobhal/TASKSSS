import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password) 
        setEmail("")
        setPassword("")  
    }
   
  return (

  <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-700 rounded-xl p-20 '>
            <form onSubmit={(e)=>
                submitHandler(e)
            } className='flex flex-col items-center justify-center'>
                <input value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className=' outline-none rounded-full bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 placeholder:text-gray-500' type='email' placeholder='Enter your email' />
                <input value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} required className='mt-4 outline-none rounded-full bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 placeholder:text-gray-500' type='password' placeholder='Enter your password'/>
                <button className='mt-5 outline-none rounded-full bg-emerald-600 bg-transparent border-2 border-emerald-600 text-xl py-2 px-24 text-purple-300 hover:bg-emerald-700'>Log In</button>
            </form>
        </div>
    </div>
    
  )
}

export default Login