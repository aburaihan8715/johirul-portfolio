import styles from './testimonials.module.css';

import { FaQuoteLeft } from 'react-icons/fa6';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>TESTIMONIALS</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide key={item} className={styles.slide}>
            <div className={styles.commentBox}>
              <FaQuoteLeft className={styles.icon} />
              <img
                className={styles.userImg}
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p className={styles.comment}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates iure ratione odio ducimus quod culpa rem mollitia
                molestiae delectus eligendi! Ratione cum enim magni nihil!
                Aspernatur debitis, sint iste fugit reiciendis repellat quam,
                harum veritatis veniam eaque perspiciatis facilis ipsum?
              </p>
              <span className={styles.userName}>Jahirul Islam</span>
              <span className={styles.userTitle}>CEO, XYZ CO.</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
