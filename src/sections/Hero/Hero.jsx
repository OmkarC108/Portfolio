import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
//import omkar from "../../assets/OmkarChaudhari.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import CV from "../../assets/OmkarChaudhari(ASP.NET).pdf";
import { useTheme } from "../../common/ThemeContext";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Omkar Chaudhari"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Omkar <br /> Chaudhari
        </h1>
        <h2> Fullstack Developer</h2>
        <span>
          <a href="https://x.com/OmkarC108" target="_blank">
            <img src={twitterIcon} alt="Titter icon" />
          </a>
          <a href="https://github.com/OmkarC108" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/omkarchaudhari108/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          As a passionate and proactive problem solver, I excel in web
          development and data analysis, continuously seeking to leverage my
          technical and leadership skills in dynamic environments. Let's connect
          to explore opportunities for collaboration and growth.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
