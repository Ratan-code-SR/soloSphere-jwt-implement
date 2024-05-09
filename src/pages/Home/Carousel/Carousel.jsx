
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import carouser1 from "../../../assets/carousel1.jpg"
import carouser2 from "../../../assets/carousel2.jpg"
import carouser3 from "../../../assets/carousel3.jpg"
import Slide from './Slide';
const Carousel = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Slide image={carouser1} text={'Synergistically reintermediate performance based content.'}/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={carouser2} text={'Dynamically maintain value-added functionalities.'} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={carouser2} text={'Competently e-enable collaborative services rather than bricks-and-clicks e-tailers.'} />
            </SwiperSlide>
          
        </Swiper>

    );
};

export default Carousel;