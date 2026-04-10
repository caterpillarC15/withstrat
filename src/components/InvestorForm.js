'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function InvestorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!supabase) {
      setError('Database not configured. Please try again later.');
      return;
    }

    const formData = new FormData(e.target);
    const zipCodes = formData.get('target_zip_codes').split(',').map(z => z.trim()).filter(z => z);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      target_zip_codes: zipCodes,
      investment_criteria: formData.get('investment_criteria'),
      subscription_tier: 'free',
      subscription_status: 'trial'
    };
    
    try {
      const { error: err } = await supabase.from('investors').insert([data]);
      if (err) throw err;
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Error submitting form. Please try again.');
    }
  };

  if (submitted) {
    return (
      <section className="form-section" id="investor-form">
        <div className="success">
          <h3>✓ Welcome to Strat!</h3>
          <p>Your free lead is on its way. Check your inbox.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="form-section" id="investor-form">
      <h2>Get Started</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name *</label>
          <input type="text" name="name" required placeholder="John Smith" />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="email" required placeholder="you@company.com" />
        </div>
        <div className="form-group">
          <label>Company (optional)</label>
          <input type="text" name="company" placeholder="Your Investment Firm" />
        </div>
        <div className="form-group">
          <label>Target Zip Codes</label>
          <input type="text" name="target_zip_codes" placeholder="90210, 90211, 90212" />
        </div>
        <div className="form-group">
          <label>Investment Criteria</label>
          <textarea name="investment_criteria" rows="3" placeholder="What kind of deals are you looking for?"></textarea>
        </div>
        {error && <div className="form-group" style={{color: '#E11D48'}}>{error}</div>}
        <div className="form-group">
          <button type="submit">Get My Free Lead</button>
        </div>
      </form>
    </section>
  );
}