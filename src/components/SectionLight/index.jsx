import './styles.css';

export function SectionLight({ children, centered = false, className = '' }) {
  return (
    <section className={`section-light ${centered ? 'section-light--centered' : ''} ${className}`.trim()}>
      <div className="section-light__inner">
        {children}
      </div>
    </section>
  );
}
