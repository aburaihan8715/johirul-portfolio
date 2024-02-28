import styles from './funFacts.module.css';
import { FaBuffer } from 'react-icons/fa6';
import { FaClock, FaCoffee, FaRecycle } from 'react-icons/fa';
import CountUp from 'react-countup';

const FunFacts = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>FUN FACTS</h2>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <FaBuffer className={styles.icon} />
          <span className={styles.number}>
            <CountUp duration={5} end={100} />
          </span>
          <p className={styles.infoText}>Projects Completed</p>
        </div>

        <div className={styles.listItem}>
          <FaCoffee className={styles.icon} />
          <span className={styles.number}>
            <CountUp duration={5} end={1300} />
          </span>
          <p className={styles.infoText}>Cup of coffee</p>
        </div>

        <div className={styles.listItem}>
          <FaClock className={styles.icon} />
          <span className={styles.number}>
            <CountUp duration={5} end={5700} />
          </span>
          <p className={styles.infoText}>Hours worked</p>
        </div>

        <div className={styles.listItem}>
          <FaRecycle className={styles.icon} />
          <span className={styles.number}>
            <CountUp duration={5} end={3} />
          </span>
          <p className={styles.infoText}>Ongoing projects</p>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
