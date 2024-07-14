import styles from '../components/header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Five Fights</h1>
      <p className={styles.subheader}>
        Guess the fighter from five fights.
      </p>
      <p className={styles.subheader}>A new fighter everyday.</p>
    </div>
  );
}
