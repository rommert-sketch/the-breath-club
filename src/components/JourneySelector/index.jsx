import './styles.css';

function JourneyTile({ tag, title, description, onClick }) {
  return (
    <button className="journey-tile" onClick={onClick}>
      <div className="journey-tile__header">
        {tag && <span className="journey-tile__tag">{tag}</span>}
        <h3 className="journey-tile__title">{title}</h3>
        {description && <p className="journey-tile__description">{description}</p>}
      </div>
      <span className="journey-tile__arrow" aria-hidden="true">→</span>
    </button>
  );
}

export function JourneySelector({ onPrivate, onGroup }) {
  return (
    <div className="journey-selector">
      <JourneyTile
        tag="1-on-1"
        title="Private Journey"
        description="A deeply personal breathwork experience tailored to where you are right now. Full presence, full focus, just you."
        onClick={onPrivate}
      />
      <JourneyTile
        tag="Collective"
        title="Group Event"
        description="Breathe alongside others in a held, intentional space. The shared energy makes something different possible."
        onClick={onGroup}
      />
    </div>
  );
}
