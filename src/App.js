import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home'
//import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {format} from 'date-fns'

function App() {
  const [posts, setPosts]= useState([])
  const [postTitle, setPostTitle]= useState('')
  const [postBody, setPostBody]= useEffect('')
  const [editTitle, setEditTitle]= useEffect('')
  const [editBody, setEditBody]= useState('')
  //const history = useHistory()

  return (
    <div className="App">
     <Header/>
     <Nav/>
     <Home/>
     <Footer/> 
    </div>
  );
}

export default App;
