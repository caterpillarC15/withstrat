import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import SellerForm from '../components/SellerForm';
import InvestorForm from '../components/InvestorForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Strat — Investors: Get Qualified Leads | Sellers: Get Cash Offers</title>
        <meta name="description" content="Strat delivers pre-qualified motivated home sellers directly to your inbox. Stop chasing leads. Start closing deals." />
        <meta name="keywords" content="real estate leads, motivated sellers, investment property, fix and flip, wholesale deals" />
        <meta property="og:title" content="Strat — Investors: Get Qualified Leads" />
        <meta property="og:description" content="Pre-qualified leads delivered to your inbox. Focus on closing, not prospecting." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://withstrat.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Strat",
              "description": "Real estate lead generation for investors. Pre-qualified leads delivered to your inbox.",
              "url": "https://withstrat.com",
              "areaServed": "United States",
              "serviceType": "Real Estate Investment Leads"
            })
          }}
        />
      </Head>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <InvestorForm />
        <SellerForm />
      </main>

      <footer className="footer">
        <p>© 2026 Strat. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        :root {
          --bg: #0A0A0B;
          --bg-secondary: #141416;
          --text: #FAFAFA;
          --text-secondary: #A1A1AA;
          --accent: #E11D48;
          --accent-hover: #BE123C;
          --border: #27272A;
          --success: #22C55E;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        html { scroll-behavior: smooth; }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', -apple-system, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 80px 24px;
          max-width: 1400px;
          margin: 0 auto;
          gap: 60px;
        }

        .hero-content {
          flex: 1;
          max-width: 640px;
        }

        .hero-badge {
          display: inline-block;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .hero h1 {
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .hero p {
          font-size: 20px;
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 480px;
        }

        .hero-cta {
          margin-bottom: 48px;
        }

        .btn-primary {
          display: inline-block;
          background: var(--accent);
          color: white;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
        }

        .hero-note {
          display: block;
          margin-top: 12px;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .hero-stats {
          display: flex;
          gap: 48px;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 32px;
          font-weight: 700;
          color: var(--text);
        }

        .stat-label {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .hero-visual {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .phone-mockup {
          width: 320px;
          height: 640px;
          background: var(--bg-secondary);
          border: 3px solid var(--border);
          border-radius: 40px;
          padding: 12px;
          box-shadow: 0 0 60px rgba(225, 29, 72, 0.15);
        }

        .phone-screen {
          background: var(--bg);
          height: 100%;
          border-radius: 28px;
          padding: 20px;
          overflow: hidden;
        }

        .notification {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--bg-secondary);
          border-radius: 16px;
          margin-bottom: 12px;
          animation: slideIn 0.5s ease forwards;
          opacity: 0;
        }

        .notification:nth-child(1) { animation-delay: 0.1s; }
        .notification:nth-child(2) { animation-delay: 0.2s; }
        .notification:nth-child(3) { animation-delay: 0.3s; }

        @keyframes slideIn {
          to { opacity: 1; transform: translateX(0); }
        }

        .notification-icon {
          font-size: 24px;
        }

        .notification-title {
          display: block;
          font-weight: 600;
          font-size: 14px;
        }

        .notification-desc {
          display: block;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .features {
          padding: 120px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .features h2 {
          font-size: 40px;
          text-align: center;
          margin-bottom: 64px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .feature-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 32px;
          border-radius: 24px;
          transition: all 0.3s;
        }

        .feature-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }

        .feature-icon {
          font-size: 32px;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: var(--text-secondary);
        }

        .pricing {
          background: var(--bg-secondary);
          padding: 120px 24px;
        }

        .pricing-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing h2 {
          font-size: 40px;
          text-align: center;
          margin-bottom: 16px;
        }

        .pricing-subtitle {
          text-align: center;
          color: var(--text-secondary);
          font-size: 18px;
          margin-bottom: 64px;
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 960px;
          margin: 0 auto;
        }

        .pricing-card {
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.3s;
        }

        .pricing-card:hover {
          border-color: var(--text-secondary);
        }

        .pricing-card.featured {
          border-color: var(--accent);
          position: relative;
        }

        .pricing-card.featured::before {
          content: 'Most Popular';
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: white;
          padding: 4px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
        }

        .pricing-card h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .pricing-card .price {
          font-size: 56px;
          font-weight: 700;
          margin: 24px 0;
        }

        .pricing-card .price span {
          font-size: 16px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .pricing-card ul {
          list-style: none;
          text-align: left;
          margin: 32px 0;
        }

        .pricing-card li {
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pricing-card li::before {
          content: '✓';
          color: var(--success);
          font-weight: bold;
        }

        .pricing-card button {
          background: var(--text);
          color: var(--bg);
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          width: 100%;
          transition: all 0.2s;
        }

        .pricing-card button:hover {
          transform: translateY(-2px);
        }

        .pricing-card.featured button {
          background: var(--accent);
          color: white;
        }

        .form-section {
          padding: 120px 24px;
          max-width: 600px;
          margin: 0 auto;
        }

        .form-section h2 {
          font-size: 32px;
          text-align: center;
          margin-bottom: 32px;
        }

        .form {
          background: var(--bg-secondary);
          padding: 40px;
          border-radius: 24px;
          border: 1px solid var(--border);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 14px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 16px;
          color: var(--text);
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
        }

        .form-group button {
          background: var(--accent);
          color: white;
          padding: 16px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          width: 100%;
          font-size: 16px;
          font-weight: 600;
          margin-top: 12px;
        }

        .form-group button:hover {
          background: var(--accent-hover);
        }

        .success {
          text-align: center;
          padding: 40px;
        }

        .success h3 {
          color: var(--success);
          font-size: 28px;
          margin-bottom: 16px;
        }

        .footer {
          padding: 48px 24px;
          text-align: center;
          border-top: 1px solid var(--border);
        }

        .footer p {
          color: var(--text-secondary);
        }

        @media (max-width: 960px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding-top: 40px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero p {
            max-width: 100%;
          }

          .hero-cta {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-visual {
            display: none;
          }
        }
      `}</style>
    </>
  );
}