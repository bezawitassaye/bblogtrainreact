import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import Postitem from '../Postitem'

const Authorposts = () => {
  const [posts,setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='author__posts'>
       {posts.length > 0?  <div className='container author__posts_container'>
    {
        posts.map(({id,thumbnail,category,title,desc,authorID})=>
        <Postitem key={id} postId={id} title={title} thumbnail={thumbnail} category={category} desc={desc} authorID={authorID} />)
    }

    </div>:<h2 className='center'>No Posts found</h2>
    }
   
    </section>
  )
}

export default Authorposts
