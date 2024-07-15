import styles from '../components/header.module.css';
import Image from 'next/image';
import fist from '../../public/fist.svg';
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1 className={styles.header}>Five Fights</h1>
        <div className={styles.image}>
          <Image src={fist} alt="Fist" width={60} height={60} />
        </div>
      </div>

      <p className={styles.subheader}>
        Guess the UFC fighter from five fights.
      </p>
      <p className={styles.subheader}>A new fighter everyday.</p>
    </div>
  );
}
