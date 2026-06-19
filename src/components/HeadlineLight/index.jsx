import './styles.css';

export function HeadlineLight({ children, as: Tag = 'h2', className = '' }) {
  return (
    <Tag className={`headline-light ${className}`.trim()}>
      {children}
    </Tag>
  );
}
