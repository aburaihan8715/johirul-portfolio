import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <Main />
      </main>
    </div>
  );
};

export default Home;
