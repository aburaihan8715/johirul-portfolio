import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <section id="one" className={styles.sectionOne}>
        SECTION ONE
      </section>
      <section id="two" className={styles.sectionTwo}>
        SECTION TWO
      </section>
      <section id="three" className={styles.sectionThree}>
        SECTION THREE
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
    </div>
  );
};

export default Main;
