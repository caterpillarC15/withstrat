export default function Testimonials() {
  const testimonials = [
    {
      quote: "Strat replaced 3 hours of cold calling with 5 qualified leads in my inbox every Monday. I've closed 4 deals in 60 days.",
      name: "Marcus T.",
      role: "Fix & Flip Investor",
      location: "Phoenix, AZ"
    },
    {
      quote: "Best $99 I spend every week. The leads come pre-qualified with seller motivation and timeline. Game changer.",
      name: "Sarah K.",
      role: "Wholesaler",
      location: "Atlanta, GA"
    },
    {
      quote: "Used to spend $5k/month on ads. Now I pay $199 for better leads. Strat pays for itself in one deal.",
      name: "James R.",
      role: "BRRRR Investor",
      location: "Dallas, TX"
    }
  ];

  return (
    <section className="testimonials">
      <h2>Trusted by 2,000+ Investors</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role} · {t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}