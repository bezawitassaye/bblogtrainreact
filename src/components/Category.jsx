import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import Postitem from '../Postitem'

const Category = () => {
  const [posts,setpost]=useState(DUMMY_POSTS)

  return (
    <section className="category-posts">
     
       {posts.length > 0?  <div className='container category__posts_container'>
    {
        posts.map(({id,thumbnail,category,title,desc,authorID})=>
        <Postitem key={id} postId={id} title={title} thumbnail={thumbnail} category={category} desc={desc} authorID={authorID} />)
    }

    </div>:<h2 className='center'>No Posts found</h2>
    }
    </section>
  )
}

export default Category
