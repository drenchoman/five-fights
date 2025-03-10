import styles from './faq.module.css';
interface Faqs {
  question: string;
  answer: string;
}
const faqs: Faqs[] = [
  {
    question: 'How do I play?',
    answer:
      'You have five attempts to guess the UFC fighter from their previous fights. After the 1st attempt and each attempt after, you will be given a hint.',
  },
  {
    question: 'When does it update?',
    answer: 'A new fighter appears every 12 hours.',
  },
  {
    question: 'Something is wrong / How can I share feedback?',
    answer:
      "Click the 'Share your feedback' link below and let me know!",
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
