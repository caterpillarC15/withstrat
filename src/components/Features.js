export default function Features() {
  const features = [
    { icon: '📋', title: '1. Submit Your Info', desc: 'Tell us about your property in under 2 minutes.' },
    { icon: '📞', title: '2. We Call Within 24h', desc: 'Our team contacts you to learn more about your situation.' },
    { icon: '💰', title: '3. Get a Cash Offer', desc: 'Connect with investors competing for your property.' }
  ];

  return (
    <section className="features">
      <h2>How It Works</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}