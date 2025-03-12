import styles from './form.module.css';
type Fighter = {
  fighter: string;
  attempts: number;
  handleSubmit: any;
  guess: string;
  setGuess: any;
  finished: boolean;
  allFighters: any;
  streakValue: number;
};
export default function Form({
  fighter,
  attempts,
  handleSubmit,
  guess,
  setGuess,
  finished,
  allFighters,
  streakValue,
}: Fighter) {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            list="fighterlist"
            className={styles.input}
            type="text"
            name="guess"
            value={guess}
            onChange={(event) => setGuess(event.target.value)}
            placeholder="eg: Alex Pereira"
          />
          <datalist id="fighterlist">
            {allFighters.map((f: string, i: number) => (
              <option key={i} value={f} />
            ))}
          </datalist>
        </div>
        <div>
          <button
            className={styles.button}
            type="submit"
            disabled={finished}
          >
            Submit
          </button>
        </div>
      </form>
      <div className={styles.tallyContainer}>
        <span className={styles.attempts}>
          Streak: {streakValue}{' '}
          <span>{streakValue >= 10 ? '🔥' : ''}</span>
        </span>
        <span className={styles.attempts}>
          Attempts Remaining: {attempts}
        </span>
      </div>
    </div>
  );
}
