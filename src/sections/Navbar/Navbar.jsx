import React, { useState, useEffect } from "react";
import styles from "./NavbarStyles.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeout;
    if (isMenuOpen && !isHovered) {
      timeout = setTimeout(() => {
        setIsMenuOpen(false);
      }, 8000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isMenuOpen, isHovered]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1 className="animate__pulse">Portfolio</h1>
      </div>
      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <div className={styles.menuIcon}></div>
        <div className={styles.menuIcon}></div>
        <div className={styles.menuIcon}></div>
      </button>
      <div
        className={`${styles.menu} ${isMenuOpen ? styles.show : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a className={styles.active} href="#hero">
          About
        </a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
