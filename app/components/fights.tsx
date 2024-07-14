'use client';
import styles from '../components/fights.module.css';
import Form from './form';
import { useState } from 'react';

export default function Fights({ fightInfo }) {
  const [attempts, setAttempts] = useState(5);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts(attempts - 1);
  };

  return (
    <main>
      <Form
        fighter={fightInfo[0].fighter}
        attempts={attempts}
        handleSubmit={handleSubmit}
      />
      <div>
        <h2>Fights</h2>
      </div>

      <div>
        {fightInfo.map((f, i) => (
          <div className={styles.container} key={i}>
            <span>{i + 1}</span>
            <div className={styles.wrapper}>
              <div className={styles.fighterWrapper}>
                <span
                  className={
                    attempts > 4
                      ? `${styles.hidden}`
                      : `${styles.show}`
                  }
                >
                  {f.winner == f.fighter ? 'WIN' : 'LOSS'}
                </span>
                <span>vs</span>
                <span>
                  {f.fighterTwo == f.fighter
                    ? f.fighterOne
                    : f.fighterTwo}
                </span>
              </div>
              <div className={styles.fightInfoWrapper}>
                <div>
                  <span
                    className={
                      attempts > 3
                        ? `${styles.hidden}`
                        : `${styles.show}`
                    }
                  >
                    {f.date}
                  </span>
                </div>
                <div>
                  <span
                    className={
                      attempts > 2
                        ? `${styles.hidden}`
                        : `${styles.show}`
                    }
                  >
                    {f.weightClass}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
