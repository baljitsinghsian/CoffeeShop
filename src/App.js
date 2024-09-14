

import Navbarr from './commponents/Navbarr'
import Home from './commponents/Home'
import About from "./commponents/About"
import Contact from './commponents/Contact'
import 'aos/dist/aos.css'; 

import AOS from 'aos';

import { Routes,Route } from 'react-router-dom'

import {  useState,useEffect } from 'react'
import UserContext from './commponents/Context'




function App() {



  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true
    });
    
  }, []);
  
  const[mode,setmode]=useState("light")
const darkmode=()=>{
  setmode("dark")
  if (mode==="dark"){
    setmode("light")
  }else{
    setmode("dark")
  }
}

  return (
    <>
    
    <div>

      <UserContext.Provider value={{mode,darkmode}}>

     <Navbarr >
       </Navbarr >
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        </Routes>

      </UserContext.Provider>
    </div>

    </>
  )
}

export default App
