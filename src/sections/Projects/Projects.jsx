import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/edulogo.png';
import freshBurger from '../../assets/barista.jpg';
import hipsster from '../../assets/BetterCare.png';
// import fitLift from '../../assets/nike_logo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshBurger}
          link="https://visitor-form-rohityadav21s-projects.vercel.app/"
          h3="Barista Visitor Form"
          p="Visitor Form"
        />
        <ProjectCard
          src={viberr}
          link="https://ed-tutor-website-mq4y.vercel.app/"
          h3="Edutor"
          p="A Tutoring Website"
        />
        <ProjectCard
          src={hipsster}
          link="https://better-care-tau.vercel.app/"
          h3="BetterCare"
          p="A Health Care App"
        />
      </div>
    </section>
  );
}

export default Projects;
