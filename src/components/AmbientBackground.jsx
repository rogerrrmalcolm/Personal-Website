import '../styles/BackgroundEffects.css'

export default function AmbientBackground() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="ambient-glow ambient-glow-primary" />
      <div className="ambient-glow ambient-glow-secondary" />
      <div className="ambient-beam" />
      <div className="ambient-orbit">
        <span />
      </div>
      <div className="background-noise" />
    </div>
  )
}
