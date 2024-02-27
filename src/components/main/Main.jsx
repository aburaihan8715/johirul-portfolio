import Banner from "../banner/Banner";
import Featured from "../featured/Featured";
import Projects from "../projects/Projects";
import styles from "./main.module.css";

const Main = () => {
  return (
    <>
      <section id="banner">
        <Banner />
      </section>

      <section id="featured" className={styles.sectionTwo}>
        <Featured />
      </section>

      <section id="three">SECTION THREE</section>

      <section id="four" className={styles.sectionFour}>
        SECTION FOUR
      </section>

      <section id="projects" className={styles.sectionFive}>
        <Projects />
      </section>

      <section id="six" className={styles.sectionSix}>
        SECTION SIX
      </section>

      <section id="seven" className={styles.sectionSeven}>
        SECTION SEVEN
      </section>

      <section id="eight" className={styles.sectionEight}>
        SECTION EIGHT
      </section>
    </>
  );
};

export default Main;
