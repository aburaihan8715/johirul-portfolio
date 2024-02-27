import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <section id="one" className={styles.bannerContainer}>
        <div className={styles.bannerWrapper}>
          <h1 className={styles.bannerHeading}>
            <span>👋 HELLO,</span>
            <span>I AM YOUR UX</span>
            <span>CONSULTANT</span>
          </h1>

          <p className={styles.bannerDesc}>
            I am Jahirul Islam, UX Lead @ <strong>Oter.app</strong> . I&apos;ve designed for{" "}
            <strong>Telenor, Robi, SwissLife, CarteleraApp, Dingi, Faithcircle, Zantrik, Ostad</strong> & many more companies helping them to grow. I
            <strong>turn business</strong> ideas into great products with an undying passion for delivering{" "}
            <strong>delightful user experiences</strong>.
          </p>

          <button className={styles.bannerBtn}>HIRE ME AS US CONSULTANT &rarr;</button>
        </div>
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
