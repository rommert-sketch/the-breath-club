import './styles.css';

export function Button({ children, variant = 'outline', onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
