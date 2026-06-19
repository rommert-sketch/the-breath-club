import { useState, useEffect, useRef } from 'react';
import './styles.css';

const SIDE_DURATION = 4000; // ms per side
const CYCLE = SIDE_DURATION * 4;
const SIZE = 320; // must match CSS .box-breath__square width/height

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

function getDotPosition(elapsed) {
  const t = (elapsed % CYCLE) / SIDE_DURATION; // 0–4
  const phase = Math.floor(t);
  const progress = t - phase; // 0–1 within this side

  // Square corners at (0,0) top-left, (SIZE,SIZE) bottom-right
  // origin is top-left corner of the square element
  // dot transform is translate(-50%,-50%) so we set top/left to the point
  switch (phase) {
    case 0: // Inhale: left side, bottom → top
      return { x: 0, y: SIZE * (1 - progress) };
    case 1: // Hold: top side, left → right
      return { x: SIZE * progress, y: 0 };
    case 2: // Exhale: right side, top → bottom
      return { x: SIZE, y: SIZE * progress };
    case 3: // Rest: bottom side, right → left
      return { x: SIZE * (1 - progress), y: SIZE };
    default:
      return { x: 0, y: SIZE };
  }
}

export function BoxBreath() {
  const startRef = useRef(null);
  const rafRef = useRef(null);
  const [dotPos, setDotPos] = useState({ x: 0, y: SIZE });
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    startRef.current = performance.now();

    function tick(now) {
      const elapsed = now - startRef.current;
      const t = (elapsed % CYCLE) / SIDE_DURATION;
      const phase = Math.floor(t) % 4;
      setPhaseIndex(phase);
      setDotPos(getDotPosition(elapsed));
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const currentPhase = PHASES[phaseIndex];

  return (
    <div className="box-breath">
      {/* Ambient floating words */}
      {WORDS.map(word => (
        <span key={word} className={`box-breath__word box-breath__word--${word}`}>
          {word}
        </span>
      ))}

      {/* Square */}
      <div className="box-breath__square">
        {/* Side labels */}
        {PHASES.map(p => (
          <span
            key={p.key}
            className={`box-breath__side-label box-breath__side-label--${p.side} ${currentPhase.side === p.side ? 'box-breath__side-label--active' : ''}`}
          >
            {p.label}
          </span>
        ))}

        {/* Travelling dot */}
        <div
          className="box-breath__dot"
          style={{ left: dotPos.x, top: dotPos.y }}
        />

        {/* Center phase word */}
        <span className="box-breath__phase">{currentPhase.key}</span>
      </div>
    </div>
  );
}
