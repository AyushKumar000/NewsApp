import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import LoadingBar from 'react-top-loading-bar';


export default function App() {
  const setPageSize = 3;
  const [progress, setProgress] = useState(0);

  setProgress(progress);

  
    return (
    <>
     <LoadingBar
     height={3}
        color='#f11946'
        progress={progress}
      />
    <Navbar/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <News  setProgress = { setProgress} pageSize = {setPageSize} country = 'in' category = 'general' />} 
        />
        <Route path="/about-us" element={
          <AboutUs/>} 
        />
        <Route path="/general" element={
          <News  setProgress = { setProgress} pageSize = {setPageSize} country = 'in' category = 'general' />} 
        />
        <Route path="/business" element={
          <News  setProgress = { setProgress} pageSize = {setPageSize} country = 'in' category = 'business' />} 
        />
        <Route path="/entertainment" element={
          <News  setProgress = { setProgress} pageSize = {setPageSize} country = 'in' category = 'entertainment'/>} 
        />
        <Route path="/health" element={
          <News  setProgress = { setProgress} pageSize = {setPageSize} country = 'in' category = 'health' />} 
        />
        <Route path="/sports" element={
          <News  setProgress = { setProgress} pageSize = {setPageSize} country = 'in' category = 'sports' />} 
        />
        <Route path="/technology" element={
          <News  setProgress = { setProgress} pageSize = {setPageSize} country = 'in' category = 'technology' />} 
        />
        <Route path="/science" element={
          <News  setProgress = { setProgress} pageSize = {setPageSize} country = 'in' category = 'science' />} 
        />
      </Routes>
    </BrowserRouter>
      
    </>
    )
  
}
