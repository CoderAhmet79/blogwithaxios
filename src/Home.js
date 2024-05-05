

const Home = () => {
  return (
    <div className='Home'>
      {process.env.REACT_APP_ENV_VAR}
      <p>{process.env.REACT_APP_DBCONN} </p>
    </div>
  )
}

export default Home
