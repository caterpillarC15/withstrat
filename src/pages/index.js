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
        <title>Strat - Get Cash for Your Home in 7 Days</title>
        <meta name="description" content="We connect motivated home sellers with investors ready to buy. No commissions, no hassle. Get a cash offer within 7 days." />
        <meta name="keywords" content="sell house fast, cash for homes, real estate investors, quick home sale, motivated seller, home buyer, investment property" />
        <meta name="author" content="Strat" />
        <meta property="og:title" content="Strat - Get Cash for Your Home in 7 Days" />
        <meta property="og:description" content="We connect motivated home sellers with investors ready to buy. No commissions, no hassle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://withstrat.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Strat - Get Cash for Your Home in 7 Days" />
        <meta name="twitter:description" content="We connect motivated home sellers with investors ready to buy." />
        <link rel="canonical" href="https://withstrat.com" />
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Strat",
              "description": "Connect motivated home sellers with investors. Get cash for your home in 7 days.",
              "url": "https://withstrat.com",
              "areaServed": "United States",
              "serviceType": "Real Estate",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free property evaluation"
              }
            })
          }}
        />
      </Head>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <SellerForm />
        <InvestorForm />
      </main>

      <footer className="footer">
        <p>© 2026 Strat. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        
        .hero { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 80px 20px; text-align: center; }
        .hero h1 { font-size: 3.5rem; margin-bottom: 20px; }
        .hero p { font-size: 1.3rem; opacity: 0.9; margin-bottom: 40px; }
        .hero .cta { background: #e94560; color: white; padding: 15px 40px; font-size: 1.2rem; border: none; border-radius: 50px; cursor: pointer; text-decoration: none; display: inline-block; }
        .hero .cta:hover { background: #d63d56; transform: translateY(-2px); }
        
        .features { padding: 80px 20px; max-width: 1100px; margin: 0 auto; }
        .features h2 { text-align: center; font-size: 2.5rem; margin-bottom: 50px; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
        .feature { text-align: center; padding: 30px; border-radius: 15px; background: #f8f9fa; }
        .feature-icon { font-size: 3rem; margin-bottom: 20px; }
        .feature h3 { margin-bottom: 15px; font-size: 1.4rem; }
        
        .investors { background: #f8f9fa; padding: 80px 20px; text-align: center; }
        .investors h2 { font-size: 2.5rem; margin-bottom: 20px; }
        .investors p { font-size: 1.2rem; margin-bottom: 40px; max-width: 700px; margin-left: auto; margin-right: auto; }
        .investors .pricing { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
        .pricing-card { background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); min-width: 280px; }
        .pricing-card.featured { border: 3px solid #e94560; transform: scale(1.05); }
        .pricing-card h3 { font-size: 1.5rem; margin-bottom: 10px; }
        .pricing-card .price { font-size: 3rem; font-weight: bold; color: #1a1a2e; margin: 20px 0; }
        .pricing-card .price span { font-size: 1rem; font-weight: normal; }
        .pricing-card ul { list-style: none; text-align: left; margin: 20px 0; }
        .pricing-card li { padding: 8px 0; }
        .pricing-card li::before { content: "✓"; color: #e94560; margin-right: 10px; }
        .pricing-card button { background: #1a1a2e; color: white; padding: 12px 30px; border: none; border-radius: 8px; cursor: pointer; width: 100%; font-size: 1rem; }
        .pricing-card.featured button { background: #e94560; }
        
        .form-section { padding: 80px 20px; max-width: 600px; margin: 0 auto; }
        .form-section h2 { text-align: center; font-size: 2.5rem; margin-bottom: 40px; }
        .form { background: #f8f9fa; padding: 40px; border-radius: 15px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; font-weight: 500; }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: #e94560; }
        .form-group button { background: #e94560; color: white; padding: 15px; border: none; border-radius: 8px; cursor: pointer; width: 100%; font-size: 1.1rem; font-weight: 600; }
        .form-group button:hover { background: #d63d56; }
        
        .footer { background: #1a1a2e; color: white; padding: 40px 20px; text-align: center; }
        .footer p { opacity: 0.7; }
        
        .success { display: none; text-align: center; padding: 40px; }
        .success h3 { color: #28a745; font-size: 2rem; margin-bottom: 20px; }
        
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.5rem; }
          .hero p { font-size: 1.1rem; }
          .pricing-card.featured { transform: none; }
        }
      `}</style>
    </>
  );
}