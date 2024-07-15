import styles from '../components/footer.module.css';
export default function Footer() {
  return (
    <div>
      <p className={styles.text}>
        Inspired by <a href="https://playerpast.com/">Player Past</a>
      </p>
    </div>
  );
}
