export default function Pricing() {
  const plans = [
    { 
      name: 'Starter', 
      price: '$19.95', 
      period: '/month', 
      features: ['1 qualified lead/mo', 'Basic contact info', 'Email support'],
      featured: false 
    },
    { 
      name: 'Growth', 
      price: '$79', 
      period: '/month', 
      features: ['5 qualified leads/mo', 'Full contact details', 'Priority matching', 'Market insights'],
      featured: true 
    },
    { 
      name: 'Scale', 
      price: '$139', 
      period: '/month', 
      features: ['15 qualified leads/mo', 'First access to deals', 'Dedicated support', 'Custom territory'],
      featured: false 
    }
  ];

  return (
    <section className="pricing" id="investors">
      <div className="pricing-inner">
        <h2>Plans That Scale With You</h2>
        <p className="pricing-subtitle">Start for under $20. Upgrade when you're ready to scale.</p>
        <div className="pricing-cards">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}<span>{plan.period}</span></div>
              <ul>
                {plan.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button onClick={() => document.getElementById('investor-form').scrollIntoView({behavior: 'smooth'})}>
                {plan.price === '$19.95' ? 'Start Free' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}