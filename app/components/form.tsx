import styles from '../components/form.module.css';

export default function Form({ fighter, attempts, handleSubmit }) {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="eg: Alex Pereira"
          ></input>
        </div>
        <div>
          <button className={styles.button} type="submit">
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
