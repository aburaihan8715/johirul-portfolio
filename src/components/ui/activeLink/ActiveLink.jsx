/* eslint-disable react/prop-types */
import styles from "./activeLink.module.css";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const ActiveLink = (props) => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;

  return (
    <NavHashLink
      smooth
      to={`${props.path}`}
      style={isActive(`${props.path}`) ? { color: "#9378e4", borderBottom: "2px solid #9378e4" } : null}
      className={styles.listLink}
    >
      {props.children}
    </NavHashLink>
  );
};

export default ActiveLink;
