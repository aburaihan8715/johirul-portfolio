import { useState } from 'react';
import Main from '../components/main/Main';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './home.module.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  // console.log(isOpen);
  return (
    <div className={styles.container}>
      <aside className={`${styles.sidebar} ${isOpen && styles.open}`}>
        <Sidebar setIsOpen={setIsOpen} />
      </aside>
      <main className={styles.main}>
        <Main setIsOpen={setIsOpen} isOpen={isOpen} />
      </main>
    </div>
  );
};

export default Home;
