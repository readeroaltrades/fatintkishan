import styles from "./ProjectsStyles.module.css";
import portfolio_logo from "../../assets/Portfolio_Logo.svg";
import mydesigns_logo from "../../assets/mydesigns_logo.svg"
import ProjectCard from "../../common/ProjectCard";
function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={portfolio_logo}
                    link="https://github.com/readeroaltrades/fatintkishan"
                    h3="fatintkishan.com"
                    p="Portfolio Website"
                />
                <ProjectCard
                    src={mydesigns_logo}
                    link="https://github.com/readeroaltrades/my-designs"
                    h3="My Designs"
                    p="Designs I have created."
                />
            </div>
        </section>
    );
}

export default Projects;
