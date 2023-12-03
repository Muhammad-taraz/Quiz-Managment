import React from 'react'
import{ Link } from 'react-router-dom'

const Header =() => {
    return<React.Fragment>
        <div className='Header'>
           
            <li>
                <Link to = "/HomePage">HomePage</Link>
            </li>

            <li>
                <Link to = "/Signup">Signup</Link>
            </li>

            <li>
                <Link to = "/Login">Login</Link>
            </li>

            
        </div>
    </React.Fragment>
}

export default Header
  