import React from 'react'
import{ Link } from 'react-router-dom'

const Header =() => {
    return<React.Fragment>
        <div className='Header inline-flex justify-center gap-48 mt-5 p-5 font-bold text-2xl italic bg-blue-900 text-white w-[100%]'>
           
         <Link to = "/HomePage">HomePage</Link>
         <Link to = "/Signup">Signup</Link>
         <Link to = "/Login">Login</Link>
            
        </div>
    </React.Fragment>
}

export default Header
  