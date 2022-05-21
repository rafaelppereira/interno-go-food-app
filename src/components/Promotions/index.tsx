import Link from 'next/link';
import { 
  Container
} from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SwiperCore, {
  Autoplay,
  Pagination,
} from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

export function Promotions() {
  return (
    <Container>
      <Swiper 
        slidesPerView={1} 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ 'delay': 7000, 'disableOnInteraction': false }}
      >
        <SwiperSlide>
          <img src="/promotion.png" alt="Nome da promoção" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/promotion_02.png" alt="Nome da promoção" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/promotion_03.png" alt="Nome da promoção" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/promotion.png" alt="Nome da promoção" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/promotion_02.png" alt="Nome da promoção" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/promotion_03.png" alt="Nome da promoção" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}