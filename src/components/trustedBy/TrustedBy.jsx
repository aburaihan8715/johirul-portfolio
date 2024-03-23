import styles from './trustedBy.module.css';

import logo1 from '../../../public/images/logos/business-insider.png';
import logo2 from '../../../public/images/logos/forbes.png';
import logo3 from '../../../public/images/logos/techcrunch.png';
import logo4 from '../../../public/images/logos/the-new-york-times.png';
import logo5 from '../../../public/images/logos/usa-today.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Pagination, Autoplay } from 'swiper/modules';

const TrustedBy = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>TRUSTED BY 40+ COMPANIES</h2>
      <Swiper
        // spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        // centeredSlides={true}
        slidesPerGroupSkip={4}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        // breakpoints={{
        //   576: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //   },
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination, Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <img src={logo1} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={logo2} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={logo3} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={logo4} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={logo5} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={logo1} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={logo2} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={logo3} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={logo4} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={logo5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrustedBy;
