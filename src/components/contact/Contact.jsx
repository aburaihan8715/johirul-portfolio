import styles from './contact.module.css';
import { FaEnvelope, FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>LET&apos;S TALK ABOUT PROJECTS</h2>
      <div className={styles.contactBox}>
        <div className={styles.infoBox}>
          <div className={styles.wrapper}>
            <div className={styles.infoItem}>
              <FaSearch className={styles.icon} />
              <h5 className={styles.headingSecondary}>Search on Web</h5>
              <span className={styles.destination}>atiq31416</span>
            </div>

            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <h5 className={styles.headingSecondary}>Email</h5>
              <span className={styles.destination}>hello@atiq.info</span>
            </div>

            <div className={styles.infoItem}>
              <FaLocationDot className={styles.icon} />
              <h5 className={styles.headingSecondary}>Location</h5>
              <span className={styles.destination}>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.info}>
            <span>Still Confused?</span>
            <h5 className={styles.headingTertiary}>Book a free call</h5>
          </div>

          <div>
            <button className={styles.button}>BOOK HIRE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
