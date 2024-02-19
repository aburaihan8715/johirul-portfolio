import styles from "./sidebar.module.css";
import { FaDribbble, FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import ActiveLink from "../ui/activeLink/ActiveLink";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      {/* PROFILE */}
      <div className={styles.profileBox}>
        <img
          className={styles.profileImg}
          src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/261454402_1265115780654982_5415994293805140829_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=nwXe5RNB0SQAX8bfcZD&_nc_ht=scontent.fdac27-2.fna&oh=00_AfCo8AHt3tck88Mv0yTPPCotcWHcOBnR-_tYhXR8Hrd2Tw&oe=65D7639F"
          alt="user profile"
        />
        <span className={styles.profileName}>JOHIRUL</span>
      </div>

      {/* NAVIGATION */}
      <nav>
        <ul className={styles.list}>
          <li>
            <ActiveLink path="#one">HOME</ActiveLink>
          </li>
          <li>
            <ActiveLink path="#two">FEATURED</ActiveLink>
          </li>
          <li>
            <ActiveLink path="#three">WORK PROCESS</ActiveLink>
          </li>

          <li>
            <ActiveLink path="#four">EXPERIENCE</ActiveLink>
          </li>
          <li>
            <ActiveLink path="#five">PROJECTS</ActiveLink>
          </li>
          <li>
            <ActiveLink path="#six">TESTIMONIALS</ActiveLink>
          </li>
          <li>
            <ActiveLink path="#seven">BLOG</ActiveLink>
          </li>
          <li>
            <ActiveLink path="#eight">CONTACT</ActiveLink>
          </li>
        </ul>
      </nav>

      {/* SOCIAL LINKS */}
      <div className={styles.socialLinks}>
        <a className={styles.socialLink} href="#">
          <FaFacebookF />
        </a>
        <a className={styles.socialLink} href="#">
          <FaDribbble />
        </a>
        <a className={styles.socialLink} href="#">
          <FaYoutube />
        </a>
        <a className={styles.socialLink} href="#">
          <FaLinkedin />
        </a>
      </div>

      {/* COPYRIGHT */}
      <p className={styles.copyright}>&copy; 2024 Johirul Islam</p>
    </div>
  );
};

export default Sidebar;
