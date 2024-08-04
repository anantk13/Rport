import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/blog_dark.png';
import freshBurger from '../../assets/Streamify.png';
import hipsster from '../../assets/BetterCare.png';
import fitLift from '../../assets/nike_logo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshBurger}
          link="https://videotube-rust.vercel.app/"
          h3="Streamify"
          p="Video Streaming App"
        />
        <ProjectCard
          src={viberr}
          link="https://appwrite-blog-two-opal.vercel.app/"
          h3="Blogs"
          p="Blogging Web App"
        />
        <ProjectCard
          src={hipsster}
          link="https://better-care-tau.vercel.app/"
          h3="BetterCare"
          p="A Health Care App"
        />
        <ProjectCard
          src={fitLift}
          link="https://project-nike-amber.vercel.app/"
          h3="Nike"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
