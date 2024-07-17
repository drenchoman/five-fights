import styles from '../components/answer.module.css';
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
  return (
    <div
      className={
        finished == false
          ? `${styles.hiddenAnswer}`
          : `${styles.answer}`
      }
    >
      <h2>{finished ? fighterName : ''}</h2>
    </div>
  );
}
