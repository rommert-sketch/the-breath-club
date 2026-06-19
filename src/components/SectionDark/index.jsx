import './styles.css';

export function SectionDark({ children, centered = false, className = '', id }) {
  return (
    <section id={id} className={`section-dark ${centered ? 'section-dark--centered' : ''} ${className}`.trim()}>
      <div className="section-dark__inner">
        {children}
      </div>
    </section>
  );
}
