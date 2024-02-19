import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
