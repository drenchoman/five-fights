'use client';
import styles from '../components/fights.module.css';
import Form from './form';
import { useState } from 'react';
import { getAnswerVariations } from '../helpers/getAnswerVariations';

export default function Fights({ fightInfo, fighter }) {
  const [attempts, setAttempts] = useState(5);
  const [guess, setGuess] = useState('');
  const [finished, setFinished] = useState(false);

  // Get answer variations for guess
  let acceptableAnswers = getAnswerVariations(fighter);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAttempts(() => attempts - 1);
    let result = acceptableAnswers.includes(guess.toLowerCase());
    setGuess('');
    if (result || attempts == 1) {
      setFinished(true);
    }
  };

  return (
    <main className={styles.main}>
      <Form
        fighter={fighter}
        attempts={attempts}
        handleSubmit={handleSubmit}
        guess={guess}
        setGuess={setGuess}
        finished={finished}
      />
      <div
        className={
          finished == false
            ? `${styles.hiddenAnswer}`
            : `${styles.answer}`
        }
      >
        <h2>{finished ? fighter : ''}</h2>
      </div>
      {fightInfo.map((f: any, i: number) => (
        <div className={styles.container} key={i}>
          <span>{i + 1}.</span>
          <div className={styles.wrapper}>
            <div className={styles.fighterWrapper}>
              <span
                className={
                  attempts > 3 ? `${styles.hidden}` : `${styles.show}`
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
                    attempts > 2
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
                    attempts > 1
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
    </main>
  );
}
