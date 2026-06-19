import { useState } from 'react';
import './styles.css';

const ITEMS = [
  {
    num: '01',
    title: 'Regulate',
    desc: 'Your nervous system finds its way back to balance. Breathwork activates the parasympathetic response — shifting you out of fight-or-flight and into a state of calm, grounded presence.',
  },
  {
    num: '02',
    title: 'Release',
    desc: "Stored tension and stress begin to soften. The body holds what the mind can't process. Conscious breathing creates space for what's been held to finally move through.",
  },
  {
    num: '03',
    title: 'Focus',
    desc: 'A quieter mind brings clarity and attention. When your nervous system settles, so does your thinking. Many people leave a session with unexpected clarity on what matters.',
  },
  {
    num: '04',
    title: 'Sleep',
    desc: 'The body learns how to rest again. Breathwork helps reset the rhythms that govern sleep — making it easier to switch off, stay asleep, and wake feeling restored.',
  },
  {
    num: '05',
    title: 'Feel',
    desc: "Emotions move instead of staying stuck. Breathwork is one of the fastest ways to reconnect with what you're actually feeling — and to let it pass through, rather than carry it.",
  },
  {
    num: '06',
    title: 'Reconnect',
    desc: 'You return to the body and the present moment. Modern life pulls us into our heads. The breath brings you back — to your body, to right now, to yourself.',
  },
];

export function WhatIsBreathwork() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="wib">
      <div className="wib__header">
        <span className="wib__label">The Breath</span>
        <h2 className="wib__headline">
          When the breath changes, the body begins to respond.
        </h2>
      </div>

      <div className="wib__body">
        <div className="wib__image-wrap">
          <img
            src="/images/mist.jpg"
            alt="Misty landscape"
            className="wib__image"
          />
        </div>

        <div className="wib__items">
          {ITEMS.map((item, i) => (
            <button
              key={item.num}
              className={`wib__item${openIndex === i ? ' wib__item--open' : ''}`}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <div className="wib__item-trigger">
                <span className="wib__item-num">{item.num}</span>
                <span className="wib__item-title">{item.title}</span>
              </div>
              <div className="wib__item-body">
                <div className="wib__item-body-inner">
                  <p className="wib__item-desc">{item.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
