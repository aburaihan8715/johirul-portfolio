import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>FEATURED IN NEWS</h2>

      <div className={styles.list}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className={styles.item}>
            <div className={styles.imgBox}>
              <img
                className={styles.img}
                src="https://images.pexels.com/photos/371909/pexels-photo-371909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span className={styles.imgLabel}>NEWS</span>
            </div>
            <h3 className={styles.headingSecondary}>Lorem ipsum dolor sit amet consectetur.</h3>
            <div className={styles.dateBox}>
              <span className={styles.date}>10 Feb, 2024</span>
              <span className={styles.dot} />
              <span className={styles.institution}> KALER KONTHO</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
