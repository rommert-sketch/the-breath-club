import { useState } from 'react';
import { Button } from '../Button';
import './styles.css';

export function NavBar({ onBreathWithMe, onBookSession }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <img
            src="/images/logo.jpg"
            alt="The Breath Club"
            className="navbar__logo-img"
            onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'block'; }}
          />
          <span className="navbar__logo-text" style={{ display: 'none' }}>The Breath Club</span>
        </a>

        <div className="navbar__actions">
          <Button variant="outline" onClick={onBreathWithMe}>Breath With Me</Button>
          <Button variant="solid" onClick={onBookSession}>Book a Session</Button>
        </div>

        <button
          className={`navbar__hamburger ${open ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`}>
        <Button variant="outline" onClick={onBreathWithMe}>Breath With Me</Button>
        <Button variant="solid" onClick={onBookSession}>Book a Session</Button>
      </div>
    </nav>
  );
}
