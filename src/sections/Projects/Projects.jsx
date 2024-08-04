import styles from "./ProjectsStyles.module.css";
import ayucare from "../../assets/ayucare.png";
import spring from "../../assets/spring.png";
import bookstore from "../../assets/bookstore.png";
import dataanalysis from "../../assets/data-analysis.png";
import ProjectCard from "../../common/ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ayucare}
          link="https://github.com/OmkarC108/Final_Eshop_Project.git"
          h3="AyuCare"
          p="Python/Django"
        />
        <ProjectCard
          src={spring}
          link="https://github.com/OmkarC108/blog-app-apis.git"
          h3="Blogg_App"
          p="Springboot"
        />
        <ProjectCard
          src={bookstore}
          link="https://github.com/OmkarC108/CRUD_Book_Library.git"
          h3="Book_Store"
          p="React/Node"
        />
        <ProjectCard
          src={dataanalysis}
          link="https://github.com/OmkarC108/DataAnalysisUsingJupyter.git"
          h3="Sales_Analysis"
          p="Python/Django"
        />
      </div>
    </section>
  );
}

export default Projects;
