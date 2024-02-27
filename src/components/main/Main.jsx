import Banner from "../banner/Banner";
import Featured from "../featured/Featured";
import styles from "./main.module.css";

const Main = () => {
  return (
    <>
      <section id="one">
        <Banner />
      </section>

      <section id="two" className={styles.sectionTwo}>
        SECTION TWO
      </section>

      <section id="three">
        <Featured />
      </section>

      <section id="four" className={styles.sectionFour}>
        SECTION FOUR
      </section>

      <section id="five" className={styles.sectionFive}>
        SECTION FIVE
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
