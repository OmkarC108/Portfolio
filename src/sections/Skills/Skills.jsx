import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";

export default function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="ASP.NET" />
        <SkillList src={checkMarkIcon} skill="Springboot" />
        <SkillList src={checkMarkIcon} skill="Django" />
        <SkillList src={checkMarkIcon} skill="BootStrap" />
        <SkillList src={checkMarkIcon} skill="Excel/Pandas" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
      </div>
    </section>
  );
}
