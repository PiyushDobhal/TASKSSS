import React from 'react'
const Header = (props) => {

  const logOut = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
    
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello<br/><span className='text-3xl font-semibold '> {props.data.firstName}🫦</span></h1>
        <button onClick={logOut} className='bg-red-500 text-white px-5 py-2 rounded-md text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header 