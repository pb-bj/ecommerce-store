import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import './SwiperImage';
import { images } from '../../data/data';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';
import './SwiperImage.scss'

const SwiperImage = () => {
  return (
     <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       { images.map((image, index) => (
          <SwiperSlide key={ index } >
            <img src={ image.src }  className='swiper-image'/>
            <div className="image-title">{ image.title }</div>
          </SwiperSlide>
       ))}
      </Swiper>
</>
  )
}

export default SwiperImage;

