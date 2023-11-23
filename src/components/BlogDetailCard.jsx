import icon1 from '../assets/images/ep_view.png'
import Container from 'react-bootstrap/Container';
import icon2 from '../assets/images/Ellipse 1.png'
import picture from '../assets/images/Frame 30 (5).png'
import React from 'react'
import '../components/BlogDetailCard.css'
import Footer from '../components/Footer'
import Navbar from './Navbar';

const BlogDetailCard = ({
  imageUrl,
  title,
  content,
  category,
  viewCount,
}) => {
  return (
    <>
    <Navbar/>
    <h1 className="bg-primary text-light">Blog Details</h1>
      <div className="singleman">
      <Container>

    <div>
        <h1 className='header9 mt-2'>{title}</h1>
    </div>
    <div className='line9'>
        <h3 className='self9'>{category}</h3>
        
        
        <span className='views9'><img src={icon1} alt="" />{viewCount} 7 views</span>
        <span className='mins9'><img src={icon2} alt="" />4 mins read</span>
        <p>9/09/2023</p>
    </div>

<div className='box9'> <img src={imageUrl} alt="" /> </div>
{/* <div className='box'>Box2</div>
<div className='box'>Box3</div> */}

<p className='play9'>{content}</p>
 
</Container>

 {/* <Footer/> */}
 </div>
    </>
  )
}


export default BlogDetailCard