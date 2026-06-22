import { useState, useEffect, useRef } from 'react';
import './styles.css';

const SIDE_DURATION = 4000;
const CYCLE = SIDE_DURATION * 4;

const PHASES = [
  { key: 'inhale', label: 'Inhale', side: 'left' },
  { key: 'hold',   label: 'Hold',   side: 'top' },
  { key: 'exhale', label: 'Exhale', side: 'right' },
  { key: 'rest',   label: 'Hold',   side: 'bottom' },
];

const WORDS = [
  'stillness', 'awareness', 'medicine', 'cacao',
  'microdosing', 'breathe', 'authentic', 'release',
];

// Returns percentage (0–100) so dot tracks the square at any rendered size
function getDotPercent(elapsed) {
  const t = (elapsed % CYCLE) / SIDE_DURATION;
  const phase = Math.floor(t);
  const p = t - phase;

  switch (phase) {
    case 0: return { x: 0,   y: (1 - p) * 100 }; // left side, bottom → top
    case 1: return { x: p * 100, y: 0 };           // top side, left → right
    case 2: return { x: 100, y: p * 100 };          // right side, top → bottom
    case 3: return { x: (1 - p) * 100, y: 100 };   // bottom side, right → left
    default: return { x: 0, y: 100 };
  }
}

export function BoxBreath() {
  const startRef = useRef(null);
  const rafRef = useRef(null);
  const [dotPos, setDotPos] = useState({ x: 0, y: 100 });
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    startRef.current = performance.now();

    function tick(now) {
      const elapsed = now - startRef.current;
      const t = (elapsed % CYCLE) / SIDE_DURATION;
      setPhaseIndex(Math.abs(Math.floor(t) % 4));
      setDotPos(getDotPercent(elapsed));
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const currentPhase = PHASES[phaseIndex] ?? PHASES[0];

  return (
    <div className="box-breath">
      {WORDS.map(word => (
        <span key={word} className={`box-breath__word box-breath__word--${word}`}>
          {word}
        </span>
      ))}

      <div className="box-breath__square">
        {PHASES.map(p => (
          <span
            key={p.key}
            className={`box-breath__side-label box-breath__side-label--${p.side} ${currentPhase.side === p.side ? 'box-breath__side-label--active' : ''}`}
          >
            {p.label}
          </span>
        ))}

        <div
          className="box-breath__dot"
          style={{ left: `${dotPos.x}%`, top: `${dotPos.y}%` }}
        />

        <span className="box-breath__phase">{currentPhase.key}</span>
      </div>
    </div>
  );
}
