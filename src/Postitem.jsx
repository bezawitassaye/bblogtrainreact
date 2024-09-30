import React from 'react'
import { Link } from 'react-router-dom'
import Postauthor from './Postauthor'

const Postitem = (
    {postID,
    category,
    title,
    desc,
    authorID
    ,thumbnail


    }
) => {
  return (
   <article className='post'>
      <div className="post_thumbnail">
         <img src={thumbnail} alt={title} />

      </div>
      <div className='post_content'>
        <Link to={`/posts/${authorID}`}>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <div className="post_footer">
             <Postauthor/>
            <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
   </article>
  )
}

export default Postitem
