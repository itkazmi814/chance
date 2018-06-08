CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';

DROP TABLE IF EXISTS charges;

CREATE TABLE charges (
  id uuid DEFAULT gen_random_uuid() NOT NULL,
  amount integer NOT NULL,
  date VARCHAR (255) NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  type text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);
