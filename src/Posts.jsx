import React, { useState } from 'react'
import Thumbnail from "./images/logo.png"
import Postitem from './Postitem'

import { DUMMY_POSTS } from './data'
const Posts = () => {
    const [posts,setPosts]=useState(DUMMY_POSTS)
  return (
<section className='posts'>
    {posts.length > 0?  <div className='container posts_container'>
    {
        posts.map(({id,thumbnail,category,title,desc,authorID})=>
        <Postitem key={id} postId={id} title={title} thumbnail={thumbnail} category={category} desc={desc} authorID={authorID} />)
    }

    </div>:<h2 className='center'>No Posts found</h2>
    }
   
   

</section>
  )
}

export default Posts
