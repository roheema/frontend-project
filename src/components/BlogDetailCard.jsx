import icon1 from '../assets/images/ep_view.png'
import Container from 'react-bootstrap/Container';
import icon2 from '../assets/images/Ellipse 1.png'
import picture from '../assets/images/Frame 30 (5).png'
import React from 'react'
import '../components/BlogDetailCard.css'
import Footer from '../components/Footer'
import Navbar from './Navbar';

const BlogDetailCard = () => {
  return (
    <>
    <Navbar/>
    <h1 className="bg-primary text-light">Blog Details</h1>
    <Container>
    <div>
        <h1 className='header mt-2'>The Power of Plant-Based Eating: Exploring the Benefits of a Vega...
</h1>
    </div>
    <div className='line2'>
        <h3 className='self'>Self defence</h3>
        
        
        <span className='views'><img src={icon1} alt="" /> views</span>
        <span className='mins'><img src={icon2} alt="" />4 mins read</span>
        <p>9/09/2023</p>
    </div>

<div className='box'> <img src={picture} alt="" /> </div>
{/* <div className='box'>Box2</div>
<div className='box'>Box3</div> */}

<p className='play'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit nostrum quibusdam pariatur illum, modi adipisci nihil eveniet illo omnis. Numquam pariatur dolores ratione natus. Placeat quis quia, cum esse omnis suscipit officiis laborum eveniet non in eligendi possimus, explicabo asperiores. Totam cumque voluptates dolorum, quisquam nihil molestias provident cum. 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit nostrum quibusdam pariatur illum, modi adipisci nihil eveniet illo omnis. Numquam pariatur dolores ratione natus. Placeat quis quia, cum esse omnis suscipit officiis laborum eveniet non in eligendi possimus, explicabo asperiores. Totam cumque voluptates dolorum, quisquam nihil molestias provident cum.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit nostrum quibusdam pariatur illum, modi adipisci nihil eveniet illo omnis. Numquam pariatur dolores ratione natus. Placeat quis quia, cum esse omnis suscipit officiis laborum eveniet non in eligendi possimus, explicabo asperiores. Totam cumque voluptates dolorum, quisquam nihil molestias provident cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, cumque odio architecto ducimus fugit nam incidunt delectus porro fugiat deserunt aut fuga odit omnis voluptatem minima accusantium est similique soluta velit unde. Quidem, ab, ipsum impedit iste quis similique praesentium eveniet, itaque culpa perspiciatis molestias qui sit. Voluptate, tenetur atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id tempore dolorem impedit odio quaerat, sequi ducimus recusandae labore, eaque culpa, in optio? Necessitatibus, quaerat ipsa possimus ipsam placeat nobis rerum eligendi, esse beatae delectus voluptas! Quaerat eos officia maiores labore architecto alias earum, dolore libero ex sunt nesciunt hic consequuntur. Maxime, sint. Vitae facere reiciendis, quasi nostrum odio magni, laborum eum inventore nihil tenetur assumenda eveniet. Mollitia placeat sapiente quas suscipit velit commodi vero asperiores voluptate odio hic ea similique porro nostrum consequatur cum, cumque labore libero fugiat esse! Tempore pariatur cupiditate omnis quasi iste mollitia eligendi reprehenderit accusantium consequuntur nisi totam cum laborum, at corrupti voluptatibus quae. Veritatis commodi eum ducimus beatae deleniti corrupti necessitatibus animi voluptatibus amet autem? Aut nihil iste maxime sed molestias dolor optio mollitia possimus quae minima, maiores ratione suscipit fuga accusantium consectetur totam laborum nisi, earum nam, rerum quibusdam recusandae? Assumenda harum voluptatibus cum fugiat odio sed praesentium, explicabo voluptas commodi est facilis quasi aut! 
</p>
 
</Container>

 <Footer/>
    </>
  )
}


export default BlogDetailCard