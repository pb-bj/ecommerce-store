import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import './SwiperImage';
// import  { data }  from '../../data/data';
import { data } from '../../data/data';

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
       { data.map((item, index) => (
          <SwiperSlide key={ index } >
            <img src={ item.src }  className='swiper-image'/>
            <Link to={`/category/${item.title}`}>
            <div className="image-title">{ item.title }</div>
            </Link>
          </SwiperSlide>
       ))}
      </Swiper>
</>
  )
}

export default SwiperImage;

