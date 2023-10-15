import React from 'react';
import './CarouselComponent.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const descriptions = [
    
    'Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.',
  ];

const CarouselComponent = () => (
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={1}
    slidesPerView={2.5}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <div className='carousel'>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src="/src/assets/images/Frame 30 (1).png" alt="Image 1" /></div>
      <div><p>viewsimg</p></div>
      <h5>'Intermittent Fasting: Is It the Right Approach for Weight Loss and...'</h5>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src="/src/assets/images/Frame 30 (3).png" alt="Image 2" /></div>
      <div><p>viewsimg</p></div>
      <h5>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h5>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src="/src/assets/images/Frame 30 (4).png" alt="Image 3" /></div>
      <div><p>viewsimg</p></div>
      <h5>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h5>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src="/src/assets/images/Frame 30 (2).png" alt="Image 4" /></div>
      <div><p>viewsimg</p></div>
      <h5>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h5>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    {/* ... Add more slides here */}
    </div>
  </Swiper>
);

export default CarouselComponent;