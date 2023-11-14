import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img2 from "../assets/images/Frame 30 (1).png"
import img3 from "../assets/images/Frame 30.png"
import img4 from "../assets/images/Frame 30 (3).png"
import img5 from "../assets/images/Frame 30 (6).png"
import img6 from "../assets/images/Frame 30 (5).png"

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
      <div><p>viewsimg</p></div>
      <h3>Intermittent Fasting: Is It the Right <br /> Approach for Weight Loss and...</h3>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src={img6} alt="Image 2" /></div>
      <div><p>viewsimg</p></div>
      <h3>The Power of Plant-Based Eating: <br /> Exploring the Benefits of a Vega...</h3>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className='swiper'><img src={img5} alt="Image 3" /></div>
      <div><p>viewsimg</p></div>
      <h3>The Importance of Mindfulness <br /> Meditation in Managing Chronic...</h3>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className="swiper"><img src={img2} alt="Image 4" /></div>
      <div><p>viewsimg</p></div>
      <h5>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h5>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <div className="swiper"><img src={img3} alt="Image 5" /></div>
      <div><p>viewsimg</p></div>
      <h5>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h5>
      <p className='description'>{descriptions}</p>
      </div>
    </SwiperSlide>
    {/* ... Add more slides here */}
    </div>
  </Swiper>
);

export default CarouselComponent2;