'use client';
import styles from '../components/answer.module.css';
import Confetteehee from './confetti';
import useWindowDimensions from '../helpers/useWindowDimensions';

type Answer = {
  fighterName: string;
  fighterNation: string;
  finished: boolean;
};

export default function Answer({
  fighterName,
  fighterNation,
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
      <Confetteehee
        win={finished}
        width={size.width}
        height={size.height}
      />
    </div>
  );
}
