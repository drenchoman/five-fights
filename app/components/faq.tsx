import styles from '../components/faq.module.css';
interface Faqs {
  question: string;
  answer: string;
}
const faqs: Faqs[] = [
  {
    question: 'How do I play?',
    answer:
      'You have five attempts to guess the UFC fighter from their previous fights. After the 2nd attempt and each attempt after, you will be given a hint.',
  },
  {
    question: 'When does it update?',
    answer: 'The fighter updates every 12 hours.',
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
