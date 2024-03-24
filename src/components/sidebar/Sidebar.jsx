/* eslint-disable react/prop-types */
import styles from './sidebar.module.css';
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedin,
  FaRegWindowClose,
  FaYoutube,
} from 'react-icons/fa';
import ActiveLink from '../ui/activeLink/ActiveLink';

const date = new Date().toUTCString().slice(4, 16);

const Sidebar = ({ setIsOpen }) => {
  return (
    <div className={styles.container}>
      {/* MENU CLOSE BUTTON */}
      <button onClick={() => setIsOpen(true)} className={styles.iconBox}>
        <FaRegWindowClose className={styles.icon} />
      </button>
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
          <li onClick={() => setIsOpen(true)}>
            <ActiveLink path="#banner">HOME</ActiveLink>
          </li>
          <li onClick={() => setIsOpen(true)}>
            <ActiveLink path="#featured">FEATURED</ActiveLink>
          </li>
          <li onClick={() => setIsOpen(true)}>
            <ActiveLink path="#three">WORK PROCESS</ActiveLink>
          </li>

          <li onClick={() => setIsOpen(true)}>
            <ActiveLink path="#four">EXPERIENCE</ActiveLink>
          </li>
          <li onClick={() => setIsOpen(true)}>
            <ActiveLink path="#projects">PROJECTS</ActiveLink>
          </li>
          <li onClick={() => setIsOpen(true)}>
            <ActiveLink path="#six">TESTIMONIALS</ActiveLink>
          </li>
          <li onClick={() => setIsOpen(true)}>
            <ActiveLink path="#seven">BLOG</ActiveLink>
          </li>
          <li onClick={() => setIsOpen(true)}>
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
