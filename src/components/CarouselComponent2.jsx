import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css'
import img2 from "../assets/images/Frame 30 (1).png"
import img3 from "../assets/images/Frame 30.png"
import img4 from "../assets/images/Frame 30 (3).png"
import img5 from "../assets/images/Frame 30 (6).png"
import img6 from "../assets/images/Frame 30 (5).png"
import img13 from '../assets/images/Ellipse 1.png'
import img12 from '../assets/images/ep_view.png'


const descriptions = [
    
    'Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.',
  ];

const CarouselComponent2 = () => (
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={15}
    slidesPerView={2.5}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <div className='carousel'>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src={img4} alt="Image 1" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 4 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>      <h4>Intermittent Fasting: Is It the Right <br /> Approach for Weight Loss and...</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src={img6} alt="Image 2" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 7 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>     
      <h4>The Power of Plant-Based Eating: <br /> Exploring the Benefits of a Vega...</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src={img5} alt="Image 3" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 9 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>           <h4>The Importance of Mindfulness <br /> Meditation in Managing Chronic...</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className="swiper"><img src={img2} alt="Image 4" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 14 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>           <h4>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className="swiper"><img src={img3} alt="Image 5" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 10 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>           <h4>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    {/* ... Add more slides here */}
    </div>
  </Swiper>
);

export default CarouselComponent2;