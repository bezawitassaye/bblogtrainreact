import React, { useState } from 'react'

const Createpost = () => {
  const [title,setitle]=useState("")
  const [category,setcategory]=useState("")
  const [des,setdesc]=useState("")
  const [thumbnail,setthumbnail]=useState("")
  const formats=[
    "header",
    "bold","italic","underline","strike","blockquote",
    "list","bullet","indent",
    "link","image"
  ]

  const POST_CATEGORIES=["Agriculture","Business","Education","Entertainment"
    ,"Art","Investment","Uncategorized","Weather"
  ]
  return (
    <section className='create-post'>
      <div className="container">
        <h2>Create Post</h2>
        <p className="form__error-message">This is an error message</p>
        <form className='form create-post__form'>
          <input type="text"placeholder='Title' name='title' value={title}
          onChange={e=>setitle(e.target.value)} autoFocus/>
          {POST_CATEGORIES.map(cat=><option key={cat}>{cat}</option>)}

          <input type='files' onChange={e=>setthumbnail(e.target.files[0])}
          accept='png,jpg,jpeg'/>
          <button type='submit' className='btn primary'>Create</button>
        </form>
      </div>

    </section>
  )
}

export default Createpost
