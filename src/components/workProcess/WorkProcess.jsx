import styles from './workProcess.module.css';

import { FaUsers } from 'react-icons/fa6';

const WorkProcess = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>WORK PROCESS</h2>

      <div className={styles.list}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className={styles.listItem}>
            <div className={styles.iconBox}>
              <FaUsers className={styles.icon} />
            </div>
            <h3 className={styles.headingSecondary}>User Research</h3>
            <p className={styles.desc}>
              User research is the systematic investigation of users and their
              requirements
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
