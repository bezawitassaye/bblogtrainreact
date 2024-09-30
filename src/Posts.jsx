import React, { useState } from 'react'
import Thumbnail from "./images/logo.png"
import Postitem from './Postitem'

const DUMMY_POSTS=[
    {
        id:"1",
        thumbnail:Thumbnail,
        category:"education",
        titile:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:3
    },
    {
        id:"2",
        thumbnail:Thumbnail,
        category:"busines",
        titile:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:1
    },
    {
        id:"3",
        thumbnail:Thumbnail,
        category:"education",
        titile:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:3
    },
    {
        id:"4",
        thumbnail:Thumbnail,
        category:"education",
        titile:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:3
    },
    {
        id:"5",
        thumbnail:Thumbnail,
        category:"education",
        titile:"bvisghoaeijvb",
        desc:"nijgojsdvnjhfowekpof",
        authorID:3
    },
]
const Posts = () => {
    const [posts,setPosts]=useState(DUMMY_POSTS)
  return (
<section>
    {
        posts.map(({id,thumbnail,category,titile,desc,authorID})=>
        <Postitem key={id} postId={id} thumbnail={thumbnail} category={category} desc={desc} authorID={authorID} />)
    }

</section>
  )
}

export default Posts
