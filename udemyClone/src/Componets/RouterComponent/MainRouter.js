import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Header from '../UI/Header'
import Login from '../UI/Login'
import HomePage from '../UI/HomePage'
import Signup from '../UI/Signup'
import TourPage from '../UI/TourPage'
const MainRouter=()=>{
    return (
        <>
        <header>
            <Header/>
        </header>
     
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/tourPage" element={<TourPage/>}/>
        </Routes>
       
        </>
    )
}

export default MainRouter