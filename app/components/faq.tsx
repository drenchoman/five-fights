import styles from '../components/faq.module.css';
const faqs = [
  {
    question: 'How do I play?',
    answer:
      'You have five attempts to guess the UFC fighter. After the 2nd attempt and each round after, you will be given a hint.',
  },
  {
    question: 'When does it update?',
    answer: 'Whenever I get it working.',
  },
  {
    question: 'Why does X not work?',
    answer: 'Because Y not.',
  },
];

export default function Faq() {
  return (
    <div className={styles.container}>
      <div>
        <h3>FAQ</h3>
      </div>
      <div>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.faqContainer}>
            <details>
              <summary>{faq.question}</summary>
              <div>{faq.answer}</div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
