'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'

import homeImage from '@/public/home.png';
import homeImage2 from '@/public/home2.jpg';
import homeImage3 from '@/public/home3.png';

const Slide = () => {
    return(
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{clickable: true}}
        // navigation={true}
        breakpoints={{
            640: {slidesPerView: 1},
            768: {slidesPerView: 2},
            1024: {slidesPerView: 3}
        }}
        className='mySwiper'
        >
            <SwiperSlide className='flex items-center justify-center rounded-lg'>
                <Image src={homeImage3} alt="Home-Image" className="homeImage mt-6 w-full h-auto border-5 border-amber-600 rounded-3xl"/>
            </SwiperSlide>

            <SwiperSlide className='flex items-center justify-center rounded-lg'>
                <Image height={200} src={homeImage} alt="Home-Image" className="homeImage mt-6 w-full h-auto border-5 border-amber-600 rounded-3xl"/>
            </SwiperSlide>

            <SwiperSlide className='flex items-center justify-center rounded-lg'>
                <Image src={homeImage2} alt="Home-Image" className="homeImage mt-6 w-full h-auto border-5 border-amber-600 rounded-3xl"/>
            </SwiperSlide>
        </Swiper>
    )
}
export default Slide