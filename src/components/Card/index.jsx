import { Button } from '../Button';
import './styles.css';

export function Card({
  title,
  subtitle,
  description,
  price,
  ctaLabel = 'Book now',
  variant = 'dark',
  onCta,
  className = '',
}) {
  return (
    <div className={`card card--${variant} ${className}`.trim()}>
      {subtitle && <p className="card__subtitle">{subtitle}</p>}
      <h3 className="card__title">{title}</h3>
      {description && <p className="card__description">{description}</p>}
      {price && <p className="card__price">{price}</p>}
      <div className="card__cta">
        <Button variant={variant === 'dark' ? 'outline' : 'solid'} onClick={onCta}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
