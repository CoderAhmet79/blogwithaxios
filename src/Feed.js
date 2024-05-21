import { Link } from "react-router-dom"

const Feed = ({ posts }) => {


  return (
    <div className='Feed'>

      {posts.map(posta => (
        
        <article  key={posta.id + 30}>
          <h1 key={posta.id}>
            <Link to={`post/${posta.id}`} >{posta.title}</Link>
          </h1>
          <p key={posta.id+1}> {posta.body}</p>
        </article>

      ))}
    </div>
  )
}

export default Feed


