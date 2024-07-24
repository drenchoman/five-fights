'use client';
import styles from '../components/answer.module.css';
import Confetteehee from './confetti';
import useWindowDimensions from '../helpers/useWindowDimensions';

type Answer = {
  fighterName: string;
  fighterNation: string;
  finished: boolean;
  winner: boolean;
};

export default function Answer({
  fighterName,
  fighterNation,
  winner,
  finished,
}: Answer) {
  const size = useWindowDimensions();

  return (
    <div
      className={
        finished == false
          ? `${styles.hiddenAnswer}`
          : `${styles.answer}`
      }
    >
      <h2>{finished ? fighterName : ''}</h2>
      {finished ? (
        <p>
          {winner ? (
            <span>You got it!</span>
          ) : (
            'Better luck next time.'
          )}
        </p>
      ) : (
        ''
      )}

      <Confetteehee
        win={winner}
        width={size.width}
        height={size.height}
      />
    </div>
  );
}
