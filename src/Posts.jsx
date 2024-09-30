import React, { useState } from 'react'
import Thumbnail from "./images/logo.png"
import Postitem from './Postitem'

import { DUMMY_POSTS } from './data'
const Posts = () => {
    const [posts,setPosts]=useState(DUMMY_POSTS)
  return (
<section className='posts'>
    <div className='container posts_container'>
    {
        posts.map(({id,thumbnail,category,title,desc,authorID})=>
        <Postitem key={id} postId={id} title={title} thumbnail={thumbnail} category={category} desc={desc} authorID={authorID} />)
    }

    </div>
   

</section>
  )
}

export default Posts
