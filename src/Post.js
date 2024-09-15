import { useParams, useNavigate } from "react-router-dom"


const Post = ({ posts, handleDelete}) => {
  
  const { id } = useParams()
  const navMe=useNavigate()
  
    const post = posts.find(item => (item.id).toString() === id)
    console.log("post length: "+posts.length)
    if(!post)       
     { 
       console.log("in post " + id)
      return (
         <div className='Post'> &nbsp;number <b>{id}</b> not found. May be you are posting wrong</div>
      )

     }
        return (
          <article className='Post'>
          <h1>
            {post.title}
          </h1>
          <p > {post.body}</p>
          <button onClick={() => window.location.href = `../editpost/${id}`}>Edit Post</button> 
          <button onClick={()=> 
           { handleDelete(id)
            navMe("/")}
            }>Delete Post</button>
        </article>
          )

}

export default Post
