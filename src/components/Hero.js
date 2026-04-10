export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Trusted by 2,000+ investors</span>
        <h1>Skip the Marketing.<br/>Get Paid for Deals.</h1>
        <p>Stop chasing leads. We deliver motivated home sellers directly to your inbox—pre-qualified, ready to close.</p>
        <div className="hero-cta">
          <a href="#investors" className="btn-primary">Get Your First Lead Free</a>
          <span className="hero-note">No credit card required</span>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">$2.4M</span>
            <span className="stat-label">Deals Funded</span>
          </div>
          <div className="stat">
            <span className="stat-number">15min</span>
            <span className="stat-label">Avg. Response Time</span>
          </div>
          <div className="stat">
            <span className="stat-number">94%</span>
            <span className="stat-label">Close Rate</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="notification">
              <span className="notification-icon">🏠</span>
              <div className="notification-content">
                <span className="notification-title">New Lead: 123 Main St</span>
                <span className="notification-desc">Motivated seller, $850K asking</span>
              </div>
            </div>
            <div className="notification">
              <span className="notification-icon">🏠</span>
              <div className="notification-content">
                <span className="notification-title">New Lead: 456 Oak Ave</span>
                <span className="notification-desc">Distressed property, cash buyer ready</span>
              </div>
            </div>
            <div className="notification">
              <span className="notification-icon">🏠</span>
              <div className="notification-content">
                <span className="notification-title">New Lead: 789 Pine Rd</span>
                <span className="notification-desc">Inherited home, motivated to sell</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}