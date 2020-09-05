import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import {Route} from 'react-router-dom';
import CreateBoard from './Pages/CreateBoard/CreateBoard';
import Home from './Pages/Home/Home';




function App() {
  return (
    <>
      <Navbar/>
      
      <Route exact path='/' component={Home}/>
      <Route path='/createboard' component={CreateBoard}/>
      
    </>
  );
}

export default App;
