import React from 'react'
import Postauthor from '../Postauthor'
import thumbnail from "../images/avatar.png"
import { Link } from 'react-router-dom'

const Postdetail = () => {
  return (
    <section className='post-deatil'>
       <div className="container post-detail_container">
          <div className="post-detail-header">
            <Postauthor/>
            <div className="post-detail_buttons">
              <Link to={`/posts/werwer/edit`} 
              className="btn sm primary">

                   Edit
              </Link>

              <Link to={`/posts/werwer/delete`}
              className="btn sm danger"
              >

                Delete
              </Link>
            </div>
          </div>
          <h1>This is the post title</h1>

          <div className="post-detail__thumbnail">
            <img src={thumbnail}/>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni accusantium provident ea cupiditate dolorum. Quibusdam temporibus pariatur odio voluptatem laboriosam, autem molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni accusantium provident ea cupiditate dolorum. Quibusdam temporibus pariatur odio voluptatem laboriosam, autem molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni accusantium provident ea cupiditate dolorum. Quibusdam temporibus pariatur odio voluptatem laboriosam, autem molestiae.
          </p>

       </div>
    </section>
  )
}

export default Postdetail
