// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, avatarUrl, imageUrl, author, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`}>
      <li className="list-item">
        <img src={imageUrl} alt={title} className="image" />
        <div className="list-details">
          <h1 className="heading">{title}</h1>
          <p>{author}</p>
          <img src={avatarUrl} alt="author" className="avatar" />
          <p>{topic}</p>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
