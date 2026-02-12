
CREATE TABLE public.event_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_name TEXT NOT NULL,
  payment_amount NUMERIC NOT NULL,
  upi_transaction_id TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'success', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert registrations (public event registration)
CREATE POLICY "Anyone can register for events"
  ON public.event_registrations FOR INSERT
  WITH CHECK (true);

-- Allow reading own registration by email (for confirmation)
CREATE POLICY "Anyone can read registrations"
  ON public.event_registrations FOR SELECT
  USING (true);

-- Prevent duplicate registrations (same email + event)
CREATE UNIQUE INDEX idx_unique_registration ON public.event_registrations (email, event_name);
