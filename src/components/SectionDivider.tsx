import '../styles/SectionDivider.css';

function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="section-divider-line" />
      <span className="section-divider-mark" />
      <span className="section-divider-line" />
    </div>
  );
}

export default SectionDivider;
