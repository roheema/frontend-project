import React from 'react'
import BlogProfileCard from '../components/ProfileCard'
// import BlogButton from '../components/BlogButton'
import {Container} from 'react-bootstrap'
import BlogButton from '../components/PublishSwitch'
import Publish from '../components/PublishedCard'



const BlogProfile = () => {
  return (
    <>
    
    <BlogProfileCard/>
    <BlogButton/>
    <Publish/>
    
    


    </>
  )
}

export default BlogProfile