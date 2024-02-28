import styles from './trustedBy.module.css';
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
        //   769: {
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
          <span>🥑🥑</span>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <span>🍊🍊</span>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <span>🥦🥦</span>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <span>🌿🌿</span>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <span>🍑🍑</span>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <span>🌺🌺</span>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <span>🍕🍕</span>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <span>🍜🍜</span>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <span>✈✈</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrustedBy;
