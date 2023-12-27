import React from 'react'
import Pagination from './components/Pagination'
import Stories from './components/Stories'
import "./App.css";
import Navbar from './components/Navbar';

const App = () => {
  return (
    
    <>
    
    <div>
      <Navbar/>
      
    </div>
    <Stories/>
    <Pagination/>
    
    </>
  )
}

export default App

