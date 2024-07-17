'use client';
import styles from '../components/fights.module.css';
import Form from './form';
import { useState } from 'react';
import { getAnswerVariations } from '../helpers/getAnswerVariations';
import Answer from './answer';

type Fight = {
  fightInfo: any;
  fighterName: string;
  fighterNation: string;
  allFighters: any;
};

export default function Fights({
  fightInfo,
  fighterName,
  fighterNation,
  allFighters,
}: Fight) {
  const [attempts, setAttempts] = useState(5);
  const [guess, setGuess] = useState('');
  const [finished, setFinished] = useState(false);

  // Get answer variations for guess
  let acceptableAnswers = getAnswerVariations(fighterName);

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
        fighter={fighterName}
        attempts={attempts}
        handleSubmit={handleSubmit}
        guess={guess}
        setGuess={setGuess}
        finished={finished}
        allFighters={allFighters}
      />
      <Answer
        fighterName={fighterName}
        fighterNation={fighterNation}
        finished={finished}
      />
      <div className={styles.container}>
        <span>
          Nationality:{' '}
          <span
            className={
              attempts > 1 ? `${styles.hidden}` : `${styles.show}`
            }
          >
            {fighterNation}
          </span>{' '}
        </span>
      </div>

      {fightInfo.map((f: any, i: number) => (
        <div className={styles.container} key={i}>
          <span>{i + 1}.</span>
          <div className={styles.wrapper}>
            <div className={styles.fighterWrapper}>
              <span
                className={
                  attempts > 4 ? `${styles.hidden}` : `${styles.show}`
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
    </main>
  );
}
