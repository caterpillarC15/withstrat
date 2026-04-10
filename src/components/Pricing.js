export default function Pricing() {
  const plans = [
    { name: 'Free Trial', price: '$0', period: '/week', features: ['1 lead to try', 'Basic lead info', 'Email support'], featured: false },
    { name: 'Pro', price: '$99', period: '/week', features: ['5 qualified leads', 'Full contact info', 'Priority matching', 'Market reports'], featured: true },
    { name: 'Power', price: '$199', period: '/week', features: ['15 qualified leads', 'Full contact info', 'First access', 'Dedicated support'], featured: false }
  ];

  return (
    <section className="investors" id="investors">
      <h2>For Real Estate Investors</h2>
      <p>Get exclusive access to motivated home sellers before they hit the market. Build your deals pipeline with qualified leads.</p>
      <div className="pricing">
        {plans.map((plan, i) => (
          <div key={i} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}<span>{plan.period}</span></div>
            <ul>
              {plan.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <button onClick={() => document.getElementById('investor-form').scrollIntoView({behavior: 'smooth'})}>
              {plan.price === '$0' ? 'Start Free' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}