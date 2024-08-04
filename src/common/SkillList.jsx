import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({ icon, skill }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.skillName}>{skill}</span>
    </div>
  );
}

export default SkillList;
