import Feed from "./Feed"
import NoPost from "./NoPost"
import Loading from "./Loading"

const Home = ({ posts }) => {

  if(!posts?.length) return <Loading/>

  return (
    <div className='Home'>
      {posts.length > 0 ? <Feed posts={posts} /> : <NoPost />}
    </div>
  )


}

export default Home
