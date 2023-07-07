// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getingBlogDetials()
  }

  getingBlogDetials = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    // console.log(data)
    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogDetails} = this.state

    const {title, topic, content, author, avatarUrl, imageUrl} = blogDetails

    return (
      <div>
        <img src={imageUrl} alt={title} className="image" />
        <div className="details-cont">
          <h1 className="title">{title}</h1>
          <p>{author}</p>
          <img src={avatarUrl} alt="avatar" className="avatar" />
          <p>{topic}</p>
          <p>{content}</p>
        </div>
      </div>
    )
  }

  render() {
    // const {blogDetails} = this.state
    const {isLoading} = this.state
    return (
      <div className="cont">
        {isLoading ? (
          <Loader type="Hearts" color="red" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
