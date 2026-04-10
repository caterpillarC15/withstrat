-- Strat Database Schema (simplified - RLS already handled)

-- Sellers (people wanting to sell their home)
CREATE TABLE sellers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  property_type TEXT DEFAULT 'single_family',
  bedrooms INTEGER,
  bathrooms NUMERIC(3,1),
  condition TEXT DEFAULT 'unknown',
  timeframe TEXT DEFAULT 'flexible',
  source TEXT DEFAULT 'website',
  notes TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Investors (people paying for leads)
CREATE TABLE investors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  company TEXT,
  phone TEXT,
  target_zip_codes TEXT[],
  investment_criteria TEXT,
  stripe_customer_id TEXT,
  subscription_status TEXT DEFAULT 'trial',
  subscription_tier TEXT DEFAULT 'free',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads (matches between sellers and investors)
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id UUID REFERENCES sellers(id) ON DELETE CASCADE,
  investor_id UUID REFERENCES investors(id) ON DELETE SET NULL,
  price_paid NUMERIC(10,2) DEFAULT 0,
  status TEXT DEFAULT 'available',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  claimed_at TIMESTAMPTZ
);

-- Payments (Stripe integration)
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id UUID REFERENCES investors(id) ON DELETE CASCADE,
  amount NUMERIC(10,2) NOT NULL,
  currency TEXT DEFAULT 'usd',
  stripe_payment_id TEXT,
  stripe_subscription_id TEXT,
  description TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Email sequences tracking
CREATE TABLE email_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id UUID REFERENCES investors(id) ON DELETE CASCADE,
  seller_id UUID REFERENCES sellers(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  body TEXT,
  status TEXT DEFAULT 'sent',
  sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_sellers_status ON sellers(status);
CREATE INDEX idx_sellers_created ON sellers(created_at DESC);
CREATE INDEX idx_investors_email ON investors(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_seller ON leads(seller_id);
CREATE INDEX idx_leads_investor ON leads(investor_id);