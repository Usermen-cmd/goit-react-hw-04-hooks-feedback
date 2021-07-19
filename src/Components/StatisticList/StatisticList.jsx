import styles from './StatisticList.module.css';

const StatisticList = ({ children }) => {
  return (
    <>
      <h2 className={styles.header}>Statistic</h2>
      <ul className={styles.list}>{children}</ul>
    </>
  );
};

export default StatisticList;
