export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Leads in Your Inbox',
      desc: 'Motivated sellers delivered weekly. No cold calling. No ads. Just deals.'
    },
    {
      icon: '✓',
      title: 'Pre-Qualified',
      desc: 'Every lead is vetted for motivation, timeline, and budget. We do the filtering.'
    },
    {
      icon: '📍',
      title: 'Your Territory',
      desc: 'Choose the zip codes you invest in. We only send leads in your market.'
    }
  ];

  return (
    <section className="features" id="how-it-works">
      <h2>How Strat Works</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}