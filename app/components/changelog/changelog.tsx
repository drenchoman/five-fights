import styles from './changelog.module.css';
interface Updates {
  date: string;
  updates: any;
}

const updates: Updates[] = [
  {
    date: '10/03/2025',
    updates: [
      'Connected new API after previous API stopped working.',
      'Added new animation for unsuccessful attempts.',
      'Added Feedback form.',
      'Added 10 new fighters.',
    ],
  },
  {
    date: '12/03/2025',
    updates: ['Added Streak 🔥', 'Added new animation for answer'],
  },
];

export default function Changes() {
  return (
    <div className={styles.changelog}>
      <h2>Changelog</h2>

      <div>
        {updates.map((update, i) => (
          <div key={i} className={styles.updateContainer}>
            <h3>{update.date}</h3>
            <ul>
              {update.updates.map((u: string, i: number) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
