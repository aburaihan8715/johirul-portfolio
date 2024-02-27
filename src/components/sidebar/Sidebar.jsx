import styles from "./sidebar.module.css";
import { FaDribbble, FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import ActiveLink from "../ui/activeLink/ActiveLink";

const date = new Date().toUTCString().slice(4, 16);

const Sidebar = () => {
  return (
    <div className={styles.container}>
      {/* PROFILE */}
      <div className={styles.profileBox}>
        <img
          className={styles.profileImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-32Ofl4NZ6wM3-l_TUv1zT-CCgh5sFe2U-RCjdGAhg&s"
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
      <p className={styles.copyright}>&copy; {date} Johirul Islam</p>
    </div>
  );
};

export default Sidebar;
