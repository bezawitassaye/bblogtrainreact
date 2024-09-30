import React, { useState } from 'react'
import Thumbnail from "./images/logo.png"
import Postitem from './Postitem'

const DUMMY_POSTS=[
    {
        id:"1",
        thumbnail:Thumbnail,
        category:"education",
        title:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:1
    },
    {
        id:"2",
        thumbnail:Thumbnail,
        category:"busines",
        title:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:2
    },
    {
        id:"3",
        thumbnail:Thumbnail,
        category:"education",
        title:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:3
    },
    {
        id:"4",
        thumbnail:Thumbnail,
        category:"education",
        title:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:4
    },
    {
        id:"5",
        thumbnail:Thumbnail,
        category:"education",
        title:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:5
    },
    ,
    {
        id:"6",
        thumbnail:Thumbnail,
        category:"education",
        title:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:6
    },
]
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
