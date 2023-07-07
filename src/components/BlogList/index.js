// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log(data)
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      topic: eachData.topic,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      title: eachData.title,
    }))
    this.setState({
      blogsData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="list-cont">
        {isLoading ? (
          <Loader type="Circles" color="red" height={50} width={50} />
        ) : (
          blogsData.map(eachData => (
            <BlogItem key={eachData.id} blogDetails={eachData} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
