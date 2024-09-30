import React from 'react'
import { Link } from 'react-router-dom'
import avatar from "./images/avatar.png"
const Postauthor = () => {
  return (
   <Link to={`/posts/users/sdfsdf`} className='post_author'>
      <div className="post_author-avatar">
        <img src={avatar}/>
      </div>

      <div className="post_author-details">
        <h5>By:beza</h5>
        <small>Just Now</small>
      </div>

   </Link>
  )
}

export default Postauthor
