import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import skillsImage from '../../assets/skills.png'; // Adjust the path based on where your image is stored

function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <img src={skillsImage} alt="Skills" className={styles.skillsImage} />
    </section>
  );
}

export default Skills;
