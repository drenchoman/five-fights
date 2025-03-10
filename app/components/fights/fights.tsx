'use client';
import styles from './fights.module.css';
import Form from '../form/form';
import { useState } from 'react';
import { getAnswerVariations } from '../../helpers/getAnswerVariations';
import Answer from '../answer/answer';
import { useEffect } from 'react';

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
  const [winner, setWinner] = useState(false);

  const [isActive, setIsActive] = useState(false);

  // Get answer variations for guess
  let acceptableAnswers = getAnswerVariations(fighterName);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAttempts(() => attempts - 1);
    let result = acceptableAnswers.includes(guess.toLowerCase());
    setGuess('');
    if (result) {
      setWinner(true);
      setFinished(true);
    } else if (attempts <= 1) {
      setIsActive(true);
      setFinished(true);
    } else {
      setIsActive(true);
    }
  };

  // Blink effect wehen losing a life
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsActive(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <main className={styles.main}>
      <div className={`${isActive ? styles.blink : ''}`}></div>
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
        winner={winner}
      />
      <div className={styles.container}>
        <p>
          Nationality:{' '}
          <span
            className={
              attempts > 1 ? `${styles.hidden}` : `${styles.show}`
            }
          >
            {fighterNation}
          </span>
        </p>
      </div>
      <div className={styles.fightsWrapper}>
        {fightInfo.map((f: any, i: number) => (
          <div className={styles.container} key={i}>
            <span>{i + 1}.</span>
            <div className={styles.wrapper}>
              <div className={styles.fighterWrapper}>
                <span
                  className={
                    attempts > 4
                      ? `${styles.hidden}`
                      : `${styles.show}`
                  }
                >
                  {f.result.toUpperCase()}
                </span>
                <span>vs</span>
                <span>{f.opponent}</span>
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
                    {f.method}
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
