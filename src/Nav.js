import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='Nav'>
      <input type='text'
        id='newPost'
        placeholder='Search posts.....'
        required
      />
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/newpost"> New Post</Link></li>
        <li><Link to="/reset">Reset </Link></li>
      </ul>
    </nav>
  )
}

export default Nav
