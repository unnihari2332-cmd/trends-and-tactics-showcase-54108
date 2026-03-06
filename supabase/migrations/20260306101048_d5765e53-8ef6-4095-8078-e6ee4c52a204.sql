CREATE TABLE public.marathon_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  distance_km NUMERIC NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.marathon_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.marathon_registrations
  FOR INSERT TO anon WITH CHECK (true);
