import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home'
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
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
