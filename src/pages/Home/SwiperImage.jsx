import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import  Button  from '../../components/Button/Button';

import './SwiperImage';
import { data } from '../../data/data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './style.css';
import './SwiperImage.scss'

const SwiperImage = () => {
  return (
     <>
      <Swiper
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay:2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
      >
       { data.map((item, index) => (
          <SwiperSlide key={ index } >
            <img src={ item.src }  className='swiper-image'/>
            <Link to={`/category/${item.title}`}>
            <div className="image-title">{ item.title }</div>
            <div className='swiper-btn'>
              <Button label='Shop now' className='btn-primary' />
            </div>
            </Link>
          </SwiperSlide>
       ))}
      </Swiper>
</>
  )
}

export default SwiperImage;

