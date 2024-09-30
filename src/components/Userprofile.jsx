import React, { useState } from 'react'
import avatars from "../images/avatar.png"
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const Userprofile = () => {
  const [avatar,setavatar] = useState(avatars)
  const [name,setName]=useState("")
  const [email,setEmail] = useState("")
  const [currentpassword,setcurrentpassword] = useState("")
  const [newpassword,setnewpassword]= useState("")
  const [confirmnewPasword,setconfirmnewpassword]=useState("")
  return (
   <>
    <section className='profile'>
      <div className="container profile__container">
         <Link to={`/myposts/werwer`} className='btn'>
         My posts
         
         </Link>

         <div className="profile__detail">
            <div className="avatar__wrapper">
               <div className="profile__avatar">
                  <img src={avatar} alt=''/>
               </div>
               {}
               <from className="avatar__form">

                <input type="file" name='avatar' id='avatar'
                 onChange={e=>setavatar(e.target.files[0])}
                accept='png , jpg ,jpeg' />
                <label htmlFor='avatar'><FaEdit/></label>
               </from>
               <button className='profile__avatar-btn'><FaCheck/></button>
            </div>
            <h1>Bezawit assaye</h1>
           
         </div>
         <div className="container">
     
           <form action="" className="form register__form ">
             <p className='form__error-message'>This is an error message</p>
             <input type="text" placeholder='Full Name' value={name} 
               onChange={e=>setName(e.target.value)}/>
             <input type="email" placeholder='Email' value={email} 
               onChange={e=>setEmail(e.target.value)}/>
             <input type="password" placeholder='current password' 
               value={currentpassword} 
               onChange={e=>setcurrentpassword(e.target.value)}/>
             <input type="password" placeholder='new password ' value={newpassword} 
               onChange={e=>setnewpassword(e.target.value)}/>
             <input type="text" placeholder='confirm new password'
                value={confirmnewPasword} 
               onChange={e=>setconfirmnewpassword(e.target.value)}/>
             

              <button type='submit' className='btn primary'>Update details</button>
             
           </form>

    </div>

      </div>
    
           


    </section>
  
    


 </>
  )
}

export default Userprofile
