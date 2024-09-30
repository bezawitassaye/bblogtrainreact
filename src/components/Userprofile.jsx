import React, { useState } from 'react'
import avatars from "../images/avatar.png"
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const Userprofile = () => {
  const [avatar,setavatar] = useState("")
  return (
    <section className='profile'>
      <div className="container profile__container">
         <Link to={`/myposts/werwer`} className='btn'>
         My posts
         
         </Link>

         <div className="profile__detail">
            <div className="avatar__wrapper">
               <div className="profile__avatar">
                  <img src={avatars} alt=''/>
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

      </div>


    </section>
  )
}

export default Userprofile
