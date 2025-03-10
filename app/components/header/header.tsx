import styles from './header.module.css';
import Image from 'next/image';
import fist from '../../../public/fist.svg';
import Link from 'next/link';
export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.welcome}>
          <h1 className={styles.header}>Five Fights</h1>
          <div className={styles.image}>
            <Image src={fist} alt="Fist" width={60} height={60} />
          </div>
        </div>
      </Link>
      <p>
        <em>We are back! Thanks for your patience!</em>
      </p>
      <p className={styles.subheader}>
        Guess the UFC fighter from five fights.
      </p>
      <p className={styles.subheader}>A new fighter everyday.</p>
    </div>
  );
}
