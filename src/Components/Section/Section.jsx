import styles from './Section.module.css';

const Section = ({ children }) => {
  return (
    <div className={styles.section}>
      <h1 className={styles.header}>Please leave feedback</h1>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Section;
