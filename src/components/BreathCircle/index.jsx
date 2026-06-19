import { useState, useEffect } from 'react';
import './styles.css';

const WORDS = ['stillness', 'presence', 'surrender', 'peace', 'awareness', 'release'];

export function BreathCircle() {
  const [phase, setPhase] = useState('inhale');

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => (p === 'inhale' ? 'exhale' : 'inhale'));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="breath-circle" role="img" aria-label={`Breathing guide: ${phase}`}>
      <div className="breath-circle__ring breath-circle__ring--1" />
      <div className="breath-circle__ring breath-circle__ring--2" />
      <div className="breath-circle__ring breath-circle__ring--3" />
      <div className="breath-circle__core" />

      {WORDS.map(word => (
        <span
          key={word}
          className={`breath-circle__word breath-circle__word--${word}`}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}

      <span className="breath-circle__label">{phase}</span>
    </div>
  );
}
