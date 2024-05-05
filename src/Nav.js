import React from 'react'

const Nav = () => {
  return (
    <nav className='Nav'>
        <input type='text'
        id='newPost'
        placeholder='Search posts.....'
        required
        />
    <ul>
    <li>Home</li>
    <li>Post</li>
    <li>About</li>
    </ul>
    </nav>
  )
}

export default Nav
