/* eslint-disable react/prop-types */
import styles from './banner.module.css';
import { FaBars } from 'react-icons/fa';

const Banner = ({ setIsOpen, isOpen }) => {
  return (
    <div className={styles.container}>
      {/* menu icon open */}
      {isOpen && (
        <button onClick={() => setIsOpen(false)} className={styles.iconBox}>
          <FaBars className={styles.icon} />
        </button>
      )}
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          <span>👋 HELLO,</span>
          <span>I AM YOUR UX</span>
          <span>CONSULTANT</span>
        </h1>

        <p className={styles.desc}>
          I am Jahirul Islam, UX Lead @ <strong>Oter.app</strong> . I&apos;ve
          designed for{' '}
          <strong>
            Telenor, Robi, SwissLife, CarteleraApp, Dingi, Faithcircle, Zantrik,
            Ostad
          </strong>{' '}
          & many more companies helping them to grow. I
          <strong>turn business</strong> ideas into great products with an
          undying passion for delivering{' '}
          <strong>delightful user experiences</strong>.
        </p>

        <button className={styles.button}>
          HIRE ME AS US CONSULTANT &rarr;
        </button>
      </div>
    </div>
  );
};

export default Banner;
