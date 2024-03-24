import styles from './trustedBy.module.css';

// import logo1 from '../../../public/images/logos/business-insider.png';
// import logo2 from '../../../public/images/logos/forbes.png';
// import logo3 from '../../../public/images/logos/techcrunch.png';
// import logo4 from '../../../public/images/logos/the-new-york-times.png';
// import logo5 from '../../../public/images/logos/usa-today.png';
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
          <img src="business-insider.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src="forbes.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src="techcrunch.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src="the-new-york-times.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src="usa-today.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src="business-insider.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src="forbes.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src="techcrunch.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src="the-new-york-times.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src="usa-today.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrustedBy;
