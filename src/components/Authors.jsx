import React, { useState } from 'react'
import avatar from "../images/avatar.png"
import { Link } from 'react-router-dom'
const authorsdata=[
  {id:1,avatar:avatar,name:"hana",posts:4},
  {id:2,avatar:avatar,name:"hewan",posts:4},
  {id:3,avatar:avatar,name:"absalat",posts:4},
  {id:4,avatar:avatar,name:"aksumawit",posts:4},
  {id:5,avatar:avatar,name:"sara",posts:4}

]
const Authors = () => {
  const [authors,setauthors]=useState(authorsdata)
 
  return (

   <section className="authors">
    {authors.length > 0 ? <div className='container authors__container'>
       { authors.map(({id,avatar,name,posts})=>{
        return <Link key={id} to={`/posts/users/${id}`} className='author'>


          <div className="author__avatar">
            <img src={avatar} alt={`Image of ${name}`}/>
          </div>
          <div className="author__info">
            <h4>{name}</h4>
            <p>{posts}</p>
          </div>
        </Link>
       })}
    </div>:<h2 className='center'>no user/authors found</h2>}
       
   </section>
  )
}

export default Authors
