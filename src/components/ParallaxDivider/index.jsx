import './styles.css';

export function ParallaxDivider({ imageSrc, quote, label }) {
  return (
    <div
      className="parallax-divider"
      style={{ '--parallax-image': `url(${imageSrc})` }}
    >
      <div className="parallax-divider__bg" />
      <div className="parallax-divider__overlay" />
      <div className="parallax-divider__content">
        {quote && <p className="parallax-divider__quote">"{quote}"</p>}
        {label && <div className="parallax-divider__rule" />}
        {label && <p className="parallax-divider__label">{label}</p>}
      </div>
    </div>
  );
}
