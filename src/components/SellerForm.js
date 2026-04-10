'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function SellerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: formData.get('address'),
      property_type: formData.get('property_type'),
      timeframe: formData.get('timeframe'),
      source: 'website'
    };
    
    try {
      const { error } = await supabase.from('sellers').insert([data]);
      if (!error) setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <section className="form-section" id="seller-form">
        <div className="success">
          <h3>✓ Request Received!</h3>
          <p>We'll call you within 24 hours. Check your phone!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="form-section" id="seller-form">
      <h2>Get Your Free Offer</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name *</label>
          <input type="text" name="name" required placeholder="John Smith" />
        </div>
        <div className="form-group">
          <label>Phone Number *</label>
          <input type="tel" name="phone" required placeholder="(555) 123-4567" />
        </div>
        <div className="form-group">
          <label>Email (optional)</label>
          <input type="email" name="email" placeholder="you@email.com" />
        </div>
        <div className="form-group">
          <label>Property Address *</label>
          <input type="text" name="address" required placeholder="123 Main St, City, State ZIP" />
        </div>
        <div className="form-group">
          <label>Property Type</label>
          <select name="property_type">
            <option value="single_family">Single Family Home</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="multi_family">Multi-Family</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="form-group">
          <label>When do you want to sell?</label>
          <select name="timeframe">
            <option value="flexible">Flexible</option>
            <option value="asap">As soon as possible</option>
            <option value="30_days">Within 30 days</option>
            <option value="60_days">Within 60 days</option>
            <option value="90_days">Within 90 days</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Get My Free Offer</button>
        </div>
      </form>
    </section>
  );
}