'use client';
import styles from './error.module.css';
export default function Error() {
  return (
    <div className={styles.container}>
      <h2>Something went wrong!</h2>
      <p>Please try again later.</p>
    </div>
  );
}
