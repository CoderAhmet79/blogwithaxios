import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home'
import NewPost from './NewPost';
import Post from './Post';
import EditPost from './EditPost';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns'
import axios from 'axios';
import Loading from './Loading';
import Reset from './Reset';



function App() {

  const [posts, setPosts] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const dataFetched= useRef(false)

 
  //process.env.REACT_APP_ENV_VAR}

useEffect(()=>{

const fetchData = async () => {
  await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=5`)
  .then(res => setPosts(res.data))
  .catch (function (err) {
   console.log(err.response.status);//404
   console.log(`Error: ${err.message}`);
   console.error('Error fetching data:', err);
 })
}

if(dataFetched.current === false)
  {
     fetchData()
    console.log("fetching runs")
    dataFetched.current = true
  }
})


  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
    const NewPost = { id, title: postTitle, body: postBody, dateTime }
    const tempPost = [...posts, NewPost]
    setPosts(tempPost)
   
  }

  const handleDelete = (id) => {
    const idx=+id
    const postsList = posts.filter(item => item.id !== idx);
    setPosts(postsList);
   console.log("on delete")
   
  }


  const handleEdit = (id) => {
    const postsList = posts.filter(post => post.id === id);
    setPosts(postsList);
  
  }
  
  const handleReset = () => {
    dataFetched.current = true
  }


  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home posts={posts} />}></Route>
          <Route exact path="/post/:id" element={<Post posts={posts} handleDelete={handleDelete} />}></Route>
          <Route exact path="/newpost" element={<NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />}
          />
          <Route exact path="/editpost/:id" element={<EditPost
            posts={posts}
            handleEdit={handleEdit}
            postTitle={postTitle}
            postBody={postBody}
            setPostTitle={setPostTitle}
            setPostBody={setPostBody} />} />

            <Route exact path="/reset" element={<Reset />}></Route>
        
        </Routes>     
      </BrowserRouter>

      <Footer />
    </div>
  );

}

export default App;
