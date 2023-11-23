import React from 'react';
import img13 from '../assets/images/Ellipse 1.png'
import img12 from '../assets/images/ep_view.png'
import './Carousel.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const descriptions = [
    
    'Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.',
  ];

const CarouselComponent3 = () => (
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
      <div className='swiper'><img src="/src/assets/images/Frame 30 (1).png" alt="Image 1" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 7 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>           <h4>From Harry Potter to Dune: A  Journey into the World of Book...</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src="/src/assets/images/Frame 30 (3).png" alt="Image 2" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 14 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>           <h4>The Art of Stand-Up Comedy: A Look at the Craft of Making ...</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src="/src/assets/images/Frame 30 (4).png" alt="Image 3" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 11 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>           <h4>The Cultural Impact of Video Games: From Pong to eSports</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src="/src/assets/images/Frame 30 (2).png" alt="Image 4" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 19 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>           <h4>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src="/src/assets/images/Frame 30 (2).png" alt="Image 4" /></div>
      <div className="puppy"><p className='para'><img className='image' src={img12} alt="" /> 15 views</p>
                <p className='readers'><img className='eli' src={img13} alt="" /> 4 mins read</p>
                <p className='date'>08/08/2023</p></div>           <h4>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h4>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    {/* ... Add more slides here */}
    </div>
  </Swiper>
);

export default CarouselComponent3;