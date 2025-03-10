import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.text}>
          <a href="https://docs.google.com/forms/d/13TZVnQZEumUBuNGPfPR4KRDoki62xfx3j1nHI5QUIAI/edit">
            Share your feedback
          </a>
        </li>
        <li>
          <Link href="/changelog">Changelog</Link>
        </li>
      </ul>
      <p className={styles.text}>
        <em className={styles.small}>
          This site is completely ad-free and always will be.
        </em>
      </p>
    </div>
  );
}
