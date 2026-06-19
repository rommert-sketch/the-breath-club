import './styles.css';

export function HeadlineDark({ boldLine, italicLine, className = '' }) {
  return (
    <h1 className={`headline-dark ${className}`.trim()}>
      {boldLine && <span className="headline-dark__bold">{boldLine}</span>}
      {italicLine && <span className="headline-dark__italic">{italicLine}</span>}
    </h1>
  );
}
