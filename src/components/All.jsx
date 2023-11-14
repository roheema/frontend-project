import React from 'react'
import './All.css'
import img1 from '../assets/images/Frame 13.png'
import img2 from '../assets/images/ep_view.png'
import img3 from '../assets/images/Ellipse 1.png'
import img4 from '../assets/images/Frame 21.png'
import img5 from '../assets/images/Frame 21 (1).png'
import img6 from '../assets/images/Frame 21 (2).png'
import CarouselComponent from './CarouselComponent'
import CarouselComponent2 from './CarouselComponent2'
import CarouselComponent3 from './CarouselComponent3'

const All = () => {
  return (
    <div className="All">
        <div className="sub-section">
            <div className="first-section">
                <h3>Trending</h3>
                <img src={img1} alt="" />
                <div className="viewers">
                <p className='self-defence'>Self Defence</p>
                <p className='para'><img className='image' src={img2} alt="" /> views</p>
                <p className='readers'><img className='eli' src={img3} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p>
                </div>
                <h4>The importance  of self defense: In teenagers</h4>
                <p className='lorems'>Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
            </div>
            <div className="second-section">
                <h3>Most Read</h3>
                <div className="first-man">
                    <div className="image-man">
                    <img className='small' src={img4} alt="" />
                    </div>
                    <div className="texts">
                    <div className="constructor">
                        <p className='construction'>Construction</p>
                    <div className='icon'><img className='eli' src={img3} alt="" />
                    <span>4 mins read</span></div>
                        <span className='dater'>8/08/2023</span>
                    </div>
                    <div className="para-man">
                    <h6>The challenges construction workers are facing </h6>
                    <p className='waiter'>Lorem ipsum dolor sit amet consectetur. Sed vel integer praesent eget ac urna. Sit fames aenean et orci diam. Mauris tincidunt ornare facilisis dolor enim.</p>
                    </div>
                    </div>
                </div>
                <div className="first-man">
                    <div className="image-man">
                    <img className='small' src={img5} alt="" />
                    </div>
                    <div className="texts">
                    <div className="constructor">
                        <p className='construction1'>Health Care</p>
                    <div className='icon'><img className='eli' src={img3} alt="" />
                    <span>4 mins read</span></div>
                        <span className='dater'>8/08/2023</span>
                    </div>
                    <div className="para-man">
                    <h6>The impact of herd immunity in the general populace </h6>
                    <p className='waiter'>Lorem ipsum dolor sit amet consectetur. Sed vel integer praesent eget ac urna. Sit fames aenean et orci diam. Mauris tincidunt ornare facilisis dolor enim.</p>
                    </div>
                    </div>
                </div>
                <div className="first-man">
                    <div className="image-man">
                    <img className='small' src={img6} alt="" />
                    </div>
                    <div className="texts">
                    <div className="constructor">
                        <p className='construction2'>Sports</p>
                    <div className='icon'><img className='eli' src={img3} alt="" />
                    <span>4 mins read</span></div>
                        <span className='dater'>8/08/2023</span>
                    </div>
                    <div className="para-man">
                    <h6>The Olympic community concluded that karate...</h6>
                    <p className='waiter'>Lorem ipsum dolor sit amet consectetur. Sed vel integer praesent eget ac urna. Sit fames aenean et orci diam. Mauris tincidunt ornare facilisis dolor enim.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default All