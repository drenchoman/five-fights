import styles from '../components/form.module.css';
type Fighter = {
  fighter: string;
  attempts: number;
  handleSubmit: any;
  guess: string;
  setGuess: any;
  finished: boolean;
};
export default function Form({
  fighter,
  attempts,
  handleSubmit,
  guess,
  setGuess,
  finished,
}: Fighter) {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            type="text"
            name="guess"
            value={guess}
            onChange={(event) => setGuess(event.target.value)}
            placeholder="eg: Alex Pereira"
          ></input>
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
      <span className={styles.attempts}>
        Attempts Remaining: {attempts}
      </span>
    </div>
  );
}
