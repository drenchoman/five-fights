const faqs = [
  {
    question: 'How do I create an accordion?',
    answer: ' The tags details and summary have you covered',
  },
  {
    question: 'Why does X not work?',
    answer: 'Because Y not.',
  },
];

export default function Faq() {
  return (
    <div>
      <div>
        <h3>FAQ</h3>
      </div>
      <div>
        {faqs.map((faq, i) => (
          <details key={i}>
            <summary>{faq.question}</summary>
            <div>{faq.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
