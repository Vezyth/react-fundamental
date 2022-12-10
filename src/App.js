// useState, useRef, useEffect, props
/*
import React, { useState, useEffect, useRef } from 'react'
import Testing from './components/testing'




const App = () => {
  const [limit, setLimit] = useState(1)
  const [name, setName] = useState("Julius Kevin")
  const inputNameRef = useRef(null)

  useEffect(() => { //ketika data berubah
    setName(inputNameRef.current.value) 
  }, [limit])//setName akan jalan setelah limit berubah 
  
  return (
    <>
      <center>
        {name}
        {limit}
        <br/>
        <input placeholder='name' ref={inputNameRef}/>
        <button onClick={()=> setLimit((prev)=> prev+1)}>naikkan limit</button>
        <button onClick={()=> setLimit((prev)=> prev-1)}>turunkan limit</button>
      </center>
      <Testing title="Hello Bang" description="apaan sih bang hehehe"/>
    </>
  )
}
export default App
*/

import React from "react";
import Albums from "./components/albums/main.albums";
import Mainlayouts from "./components/layouts/main.layouts";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"

const App = () => {
  return (
    <>
      <Mainlayouts>
        <Router>
          <Routes>
            <Route path="/" element ={<h1>Home</h1>}/>
            <Route path="/albums" element ={<Albums/>}/>
            <Route path="/posts" element ={<h1>POSTING</h1>}/>
            <Route path="*" element ={<h1 className="text-center text-danger">404 not found</h1>}/>
          </Routes>
        </Router>
      </Mainlayouts>
    </>
  );
};

export default App;
