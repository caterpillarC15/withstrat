export default function Pricing() {
  const plans = [
    { 
      name: 'Trial', 
      price: '$0', 
      period: '/week', 
      features: ['1 lead to try', 'Basic contact info', 'Email support'],
      featured: false 
    },
    { 
      name: 'Pro', 
      price: '$99', 
      period: '/week', 
      features: ['5 qualified leads', 'Full contact details', 'Priority matching', 'Market insights'],
      featured: true 
    },
    { 
      name: 'Power', 
      price: '$199', 
      period: '/week', 
      features: ['15 qualified leads', 'First access to deals', 'Dedicated support', 'Custom territory'],
      featured: false 
    }
  ];

  return (
    <section className="pricing" id="investors">
      <div className="pricing-inner">
        <h2>Plans That Scale With You</h2>
        <p className="pricing-subtitle">Start free. Upgrade when you're ready to scale.</p>
        <div className="pricing-cards">
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
      </div>
    </section>
  );
}