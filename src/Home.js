import React from 'react'


const Home = () => {
  return (
    <div className='Home'>
      {process.env.REACT_APP_ENV_VAR}
    </div>
  )
}

export default Home
