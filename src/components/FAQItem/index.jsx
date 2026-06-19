import { useState } from 'react';
import './styles.css';

export function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__trigger"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="faq-item__question">{question}</span>
        <span className="faq-item__icon" aria-hidden="true" />
      </button>
      <div className="faq-item__body">
        <div className="faq-item__body-inner">
          <p className="faq-item__answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}
