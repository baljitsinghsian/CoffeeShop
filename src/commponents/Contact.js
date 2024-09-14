import React from 'react'
import './Contact.css'
import { useState } from 'react'

function Contact() {
  const[user,setuser]=useState()
  const[email,setEmail]=useState()
  const [number, setNumber] = useState('');
  const[userErr,setuserErr]=useState(false)
  const[EmailErr,setEmailErr]=useState(false)
  const [numberErr, setNumberErr] = useState(false);
  
const handelform=(e)=>{
  e.preventDefault();
if(user.length < 3 || email.length < 3 || number.length < 3){
  alert("please type correct values")
}else{
  alert("submit successfull")
}
}
const userhandler=(e)=>{
  let item=e.target.value;
  if(item.length<3){
    setuserErr(true)
  }else{
    setuserErr(false)
  }
  setuser(item);
}
const emailHandler = (e) => {
  const item = e.target.value;
  if (item.length < 3 || !item.includes('@')) {
    setEmailErr(true);
  } else {
    setEmailErr(false);
  }
  setEmail(item);
}
const numberHandler = (e) => {
  const item = e.target.value;
  if (item.length < 10) {
    setNumberErr(true);
  } else {
    setNumberErr(false);
  }
  setNumber(item);
}

  return (
   <>
   <div className="container-md-12 con">

    <div className="fform">
      
<form onSubmit={handelform}>


      <h1> Contact Us Form</h1>

   
      <input type="text" className="text" placeholder='Name' value={user} onChange={userhandler} /><br/>
      {userErr ? <span>Write a valid username.</span> : null}<br /><br />

      <input type="text" className="text" placeholder='Email' value={email} onChange={emailHandler}  /><br /><br />
{EmailErr ? <span>write valid email address</span> : ""}<br /><br/>
    
      <input type="number" className="number" placeholder='Phone number' value={number} onChange={numberHandler}/><br/>
{numberErr ? <span>plese insert valid number</span> : "" }<br></br>
      <textarea className="message" placeholder="Message"></textarea><br />
      
    <button type='submit' >send</button>


</form>
    </div>
   </div>
   
   </>
  )
}

export default Contact
